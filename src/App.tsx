import React, { useState, useEffect, useRef } from 'react';
import { Settings, Search, Plus, X, Trash2 } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Switch from '@radix-ui/react-switch';
import { quotes } from './quotes';
import { Categories } from './components/Categories';

// Remove the wrapper and force immediate usage
if (typeof Categories === 'undefined') {
    console.error('Categories component failed to load');
}

interface FavoriteLink {
    id: string;
    url: string;
    title: string;
    icon: string | null;
}

interface Settings {
    showQuotes: boolean;
    categories: {
        [key: string]: boolean;
    };
    favoriteLinks: FavoriteLink[];
}

// Add query groups for each category
const categoryQueries: { [key: string]: string[] } = {
    nature: [
        'forest', 'mountains', 'ocean', 'sunset', 'desert',
        'beach', 'waterfall', 'lake', 'jungle', 'autumn',
        'spring', 'river', 'garden', 'island', 'meadow',
        'valley', 'canyon', 'glacier', 'volcano', 'reef'
    ],
    architecture: [
        'skyscraper', 'castle', 'bridge', 'cathedral', 'museum',
        'palace', 'tower', 'temple', 'mansion', 'church',
        'mosque', 'stadium', 'library', 'pavilion', 'villa',
        'dome', 'arch', 'monument', 'pyramid', 'lighthouse'
    ],
    animals: [
        'lion', 'tiger', 'elephant', 'giraffe', 'penguin',
        'dolphin', 'wolf', 'bear', 'eagle', 'owl',
        'whale', 'zebra', 'panda', 'koala', 'gorilla',
        'cheetah', 'leopard', 'turtle', 'shark', 'butterfly'
    ],
    art: [
        'painting', 'sculpture', 'drawing', 'portrait', 'abstract',
        'mural', 'graffiti', 'illustration', 'sketch', 'watercolor',
        'collage', 'mosaic', 'ceramic', 'origami', 'calligraphy',
        'pottery', 'prints', 'photography', 'digital', 'artwork'
    ],
    people: [
        'portrait', 'smile', 'family', 'friends', 'children',
        'elderly', 'musician', 'artist', 'dancer', 'athlete',
        'worker', 'student', 'teacher', 'doctor', 'chef',
        'performer', 'traveler', 'couple', 'group', 'celebration'
    ],
    food: [
        'cuisine', 'dessert', 'breakfast', 'dinner', 'fruits',
        'vegetables', 'seafood', 'baking', 'coffee', 'tea',
        'wine', 'chocolate', 'pasta', 'sushi', 'barbecue',
        'salad', 'soup', 'sandwich', 'cake', 'ice cream'
    ],
    travel: [
        'cityscape', 'landmark', 'street', 'market', 'beach',
        'mountain', 'village', 'resort', 'hotel', 'airport',
        'train', 'harbor', 'park', 'plaza', 'boulevard',
        'cafe', 'restaurant', 'museum', 'festival', 'adventure'
    ],
    technology: [
        'computer', 'smartphone', 'robot', 'laboratory', 'circuit',
        'screen', 'keyboard', 'device', 'gadget', 'innovation',
        'future', 'digital', 'network', 'virtual', 'artificial',
        'machine', 'electronic', 'software', 'hardware', 'tech'
    ],
    abstract: [
        'pattern', 'texture', 'geometry', 'lines', 'shapes',
        'colors', 'waves', 'spiral', 'fractal', 'minimal',
        'chaos', 'harmony', 'flow', 'motion', 'space',
        'light', 'shadow', 'reflection', 'symmetry', 'abstract'
    ],
    fashion: [
        'style', 'clothing', 'accessories', 'jewelry', 'shoes',
        'dress', 'suit', 'hat', 'bag', 'watch',
        'sunglasses', 'makeup', 'hairstyle', 'model', 'runway',
        'boutique', 'designer', 'vintage', 'trendy', 'elegant'
    ],
    space: [
        'galaxy', 'stars', 'planet', 'nebula', 'cosmos',
        'moon', 'sun', 'asteroid', 'comet', 'telescope',
        'spacecraft', 'astronaut', 'orbit', 'constellation', 'meteor',
        'universe', 'space station', 'black hole', 'supernova', 'aurora'
    ]
};

const defaultSettings: Settings = {
    showQuotes: true,
    categories: {
        nature: true,
        architecture: true,
        art: true,
        people: true,
        animals: true,
        food: false,
        travel: true,
        technology: false,
        abstract: false,
        fashion: true,
        space: false
    },
    favoriteLinks: [
        {
            id: 'lummi',
            url: 'https://www.lummi.ai',
            title: 'Lummi',
            icon: null
        },
        {
            id: 'linkedin',
            url: 'https://www.linkedin.com',
            title: 'LinkedIn',
            icon: null
        },
        {
            id: 'bluesky',
            url: 'https://bsky.app',
            title: 'Bluesky',
            icon: null
        },
        {
            id: 'chatgpt',
            url: 'https://chat.openai.com',
            title: 'ChatGPT',
            icon: null
        }
    ]
};

interface Quote {
    text: string;
    author: string;
}

interface ImageAttribution {
    name: string;
    username: string;
    attributionUrl: string;
}

interface CurrentImage {
    url: string;
    blurhash: string;
    description: string;
    attribution: ImageAttribution;
}

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((prev: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

function getMainDomain(url: string): string {
    try {
        const hostname = new URL(url).hostname;
        return hostname.replace(/^www\./, '');
    } catch (error) {
        console.error('Error parsing URL:', error);
        return '';
    }
}

const App: React.FC = () => {
    const [settings, setSettings] = useLocalStorage<Settings>('settings', defaultSettings);
    const [quote, setQuote] = useState<Quote | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchContainerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [imageAttribution, setImageAttribution] = useState<ImageAttribution>({ name: '', username: '', attributionUrl: '' });
    const [currentImage, setCurrentImage] = useState<CurrentImage | null>(null);
    const [editingLinks, setEditingLinks] = useState<FavoriteLink[]>([]);
    const [isEditingLinks, setIsEditingLinks] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(false);

    // Update the fetchImage function to use the absolute URL
    const fetchImage = async (selectedQuery: string) => {
        setIsImageLoading(true);
        try {
            // Get enabled categories and their queries
            const enabledCategories = Object.entries(settings.categories)
                .filter(([_, enabled]) => enabled)
                .map(([category]) => category);

            if (enabledCategories.length === 0) {
                console.error('No categories enabled');
                return;
            }

            // Get all queries from enabled categories
            const allQueries = enabledCategories.flatMap(category => categoryQueries[category] || []);

            // If no query is provided, randomly select one from enabled categories
            const queryToUse = selectedQuery || allQueries[Math.floor(Math.random() * allQueries.length)];

            console.log('Making search request for query:', queryToUse);
            const apiUrl = `https://lummi-extension-final.vercel.app/api/search?query=${encodeURIComponent(queryToUse)}`;
            console.log('Using API URL:', apiUrl);

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Search response for query:', queryToUse, {
                totalResults: data.data.length,
                firstImageDescription: data.data[0].description
            });

            // Randomly select one image from the results array
            const randomIndex = Math.floor(Math.random() * data.data.length);
            const selectedImage = data.data[randomIndex];

            console.log('Using randomly selected image for query:', queryToUse, {
                index: randomIndex,
                totalImages: data.data.length,
                selectedDescription: selectedImage.description,
                imageType: selectedImage.imageType,
                url: selectedImage.url
            });

            setCurrentImage({
                url: selectedImage.url,
                blurhash: selectedImage.blurhash || '',
                description: selectedImage.description || '',
                attribution: {
                    name: selectedImage.author?.name || 'Unknown',
                    username: selectedImage.author?.username || '',
                    attributionUrl: selectedImage.author?.attributionUrl || ''
                }
            });
            setImageAttribution({
                name: selectedImage.author?.name || 'Unknown',
                username: selectedImage.author?.username || '',
                attributionUrl: selectedImage.author?.attributionUrl || ''
            });
        } catch (error) {
            console.error('Error fetching image:', error);
        } finally {
            setIsImageLoading(false);
        }
    };

    // Update the useEffect to use the fetchImage function
    useEffect(() => {
        fetchImage(searchQuery);
        const interval = setInterval(() => fetchImage(searchQuery), 60 * 60 * 1000);
        return () => clearInterval(interval);
    }, [searchQuery]);

    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings));
    }, [settings]);

    // Get a random quote when showQuotes changes
    useEffect(() => {
        if (settings.showQuotes) {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
        } else {
            setQuote(null);
        }
    }, [settings.showQuotes]);

    // Change quote every 24 hours
    useEffect(() => {
        if (!settings.showQuotes) return;

        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            setQuote(quotes[randomIndex]);
        }, 24 * 60 * 60 * 1000);

        return () => clearInterval(interval);
    }, [settings.showQuotes]);

    // Handle search suggestions
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (searchQuery.trim().length === 0) {
                setSuggestions([]);
                return;
            }

            try {
                // Using JSONP approach for suggestions
                const script = document.createElement('script');
                script.src = `https://suggestqueries.google.com/complete/search?client=youtube&q=${encodeURIComponent(searchQuery)}&jsonp=handleSuggestions`;
                document.body.appendChild(script);
                script.remove();
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        };

        // Debounce the suggestions fetch
        const timeoutId = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    // Handle click outside suggestions
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Add this to your window object for the JSONP callback
    useEffect(() => {
        (window as any).handleSuggestions = (data: any) => {
            if (Array.isArray(data[1])) {
                setSuggestions(data[1].slice(0, 8));
            }
        };
    }, []);

    useEffect(() => {
        if (isEditingLinks) {
            setEditingLinks([...(settings.favoriteLinks || [])]);
        } else {
            setEditingLinks([]);
        }
    }, [isEditingLinks, settings.favoriteLinks]);

    // Handle removing a link
    const handleRemoveLink = (id: string) => {
        setEditingLinks(editingLinks.filter(link => link.id !== id));
    };

    // Handle updating a link
    const handleUpdateLink = async (id: string, field: 'title' | 'url', value: string) => {
        const updatedLinks = [...editingLinks];
        const linkIndex = updatedLinks.findIndex(link => link.id === id);
        if (linkIndex === -1) return;

        // Update the field first
        updatedLinks[linkIndex][field] = value;

        // If URL changed, update the icon immediately
        if (field === 'url' && value) {
            const domain = getMainDomain(value);
            if (domain) {
                // Special case for Lummi domains
                if (domain.includes('lummi.ai')) {
                    updatedLinks[linkIndex].icon = 'https://i.imgur.com/BOTZwfi.png';
                    console.log('Using custom Lummi icon');
                } else {
                    const iconUrl = `https://cdn.brandfetch.io/${domain}/w/400/h/400?c=1idqPQHGdjsMFy8NwQT`;
                    try {
                        const response = await fetch(iconUrl);
                        if (response.ok) {
                            updatedLinks[linkIndex].icon = iconUrl;
                            console.log('Updated link with Brandfetch icon:', iconUrl);
                        } else {
                            updatedLinks[linkIndex].icon = null;
                            console.log('No valid icon found for:', domain);
                        }
                    } catch (error) {
                        updatedLinks[linkIndex].icon = null;
                        console.error('Error checking icon:', error);
                    }
                }
            }
        }

        setEditingLinks(updatedLinks);
    };

    // Handle saving links
    const handleSaveLinks = () => {
        const processedLinks = editingLinks.map(link => {
            if (link.url) {
                const domain = getMainDomain(link.url);
                console.log('Processing link domain:', domain);

                // Special case for Lummi domains
                if (domain && domain.includes('lummi.ai')) {
                    return {
                        ...link,
                        icon: 'https://i.imgur.com/BOTZwfi.png',
                        title: link.title || 'Lummi'
                    };
                }

                return {
                    ...link,
                    icon: domain ? `https://cdn.brandfetch.io/${domain}/w/400/h/400?c=1idqPQHGdjsMFy8NwQT` : null,
                    title: link.title || domain
                };
            }
            return link;
        });

        console.log('Saving links with icons:', processedLinks); // Debug log
        setSettings(prev => ({
            ...prev,
            favoriteLinks: processedLinks.filter(link => link.url && link.url.trim() !== '')
        }));
        setIsEditingLinks(false);
    };

    const handleCategoryChange = (category: string): void => {
        setSettings(prev => ({
            ...prev,
            categories: {
                ...prev.categories,
                [category]: !prev.categories[category]
            }
        }));
    };

    // Add keyboard shortcut effect
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Cmd/Ctrl + K to focus search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                searchInputRef.current?.focus();
            }
            // Cmd/Ctrl + , to open settings
            if ((e.metaKey || e.ctrlKey) && e.key === ',') {
                e.preventDefault();
                setIsEditingLinks(true);
            }
            // Esc to close settings/suggestions
            if (e.key === 'Escape') {
                setIsEditingLinks(false);
                setShowSuggestions(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Add explicit check for Categories component
    useEffect(() => {
        console.log('Categories component available:', Categories);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat transition-all duration-[2000ms]" style={{ backgroundImage: `url(${currentImage?.url || ''})` }}>
            {/* Dark overlay with opacity transition */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${isImageLoading ? 'bg-black/60' : 'bg-black/40'}`} />

            {/* Refresh Button */}
            <button
                onClick={() => fetchImage(searchQuery)}
                disabled={isImageLoading}
                className="fixed top-4 left-4 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white/60 hover:text-white hover:bg-black/60 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Refresh Background (Loading...)"
            >
                <svg
                    className={`w-5 h-5 ${isImageLoading ? 'animate-spin' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            </button>

            {/* Main Content */}
            <div className="relative w-full max-w-2xl mx-auto px-4 py-8 flex flex-col items-center space-y-6">
                {/* Quote */}
                {settings.showQuotes && quote && (
                    <div className="text-center">
                        <p className="text-3xl md:text-5xl text-white font-serif italic opacity-90">{quote.text}</p>
                        <p className="text-white/60 mt-4">- {quote.author}</p>
                    </div>
                )}

                {/* Search */}
                <div ref={searchContainerRef} className="w-full max-w-2xl relative">
                    <form
                        action="https://www.google.com/search"
                        method="get"
                        className="flex relative"
                        onSubmit={() => setShowSuggestions(false)}
                    >
                        <div className="relative w-full flex items-center">
                            <input
                                ref={searchInputRef}
                                type="text"
                                name="q"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setShowSuggestions(true);
                                }}
                                onFocus={() => setShowSuggestions(true)}
                                className="w-full px-6 py-4 md:py-5 pl-12 rounded-2xl bg-black/40 backdrop-blur-sm text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-white/20 text-lg md:text-xl transition-all duration-200"
                                placeholder="Search Google... (⌘K)"
                            />
                            <Search className="absolute left-4 w-5 h-5 text-white/50" />
                        </div>
                    </form>

                    {/* Search Suggestions */}
                    {showSuggestions && suggestions.length > 0 && (
                        <div className="absolute w-full mt-2 bg-zinc-900/95 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden shadow-xl">
                            {suggestions.map((suggestion, index) => (
                                <a
                                    key={index}
                                    href={`https://www.google.com/search?q=${encodeURIComponent(suggestion)}`}
                                    className="flex items-center px-6 py-3 text-white hover:bg-white/10 transition-colors duration-150 text-left text-lg"
                                    onClick={() => setShowSuggestions(false)}
                                >
                                    <Search className="w-4 h-4 mr-3 text-white/50" />
                                    {suggestion}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* Favorite Links */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {Array.isArray(settings.favoriteLinks) && settings.favoriteLinks.map((link) => {
                        const domain = getMainDomain(link.url);
                        // Special case for Lummi domains
                        const iconUrl = domain.includes('lummi.ai')
                            ? 'https://i.imgur.com/BOTZwfi.png'
                            : domain ? `https://cdn.brandfetch.io/${domain}/w/400/h/400?c=1idqPQHGdjsMFy8NwQT` : null;
                        console.log('Rendering link:', link.url, 'Domain:', domain, 'Icon URL:', iconUrl);

                        return (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center p-3 rounded-lg bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-200 group w-20"
                            >
                                <div className="w-12 h-12 rounded-lg bg-black/40 flex items-center justify-center mb-2 overflow-hidden group-hover:ring-2 group-hover:ring-white/20 transition-all">
                                    {iconUrl ? (
                                        <img
                                            src={iconUrl}
                                            alt={link.title}
                                            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                                            onError={(e) => {
                                                console.error('Failed to load image:', iconUrl);
                                                // Replace with Link icon immediately
                                                e.currentTarget.parentElement!.innerHTML = `<svg class="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
                                            }}
                                        />
                                    ) : (
                                        <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                        </svg>
                                    )}
                                </div>
                                <span className="text-sm text-white/80 text-center group-hover:text-white transition-colors line-clamp-2">
                                    {link.title || domain}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>

            {/* Settings Button */}
            <button
                onClick={() => setIsEditingLinks(true)}
                className="fixed top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white/60 hover:text-white hover:bg-black/60 transition-all duration-200"
            >
                <Settings className="w-5 h-5" />
            </button>

            {/* Settings Dialog */}
            <Dialog.Root open={isEditingLinks} onOpenChange={setIsEditingLinks}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                    <Dialog.Content
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-zinc-900 rounded-xl shadow-xl max-h-[90vh] flex flex-col"
                    >
                        <Dialog.Description className="sr-only">
                            Configure your new tab settings, including quotes display, image categories, and favorite links.
                        </Dialog.Description>
                        <div className="p-6 overflow-y-auto flex-1">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <Dialog.Title className="text-lg font-medium">Settings</Dialog.Title>
                                    <Dialog.Close className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                                        <X className="w-5 h-5" />
                                    </Dialog.Close>
                                </div>

                                {/* Show Quotes Toggle */}
                                <div className="flex items-center justify-between">
                                    <label htmlFor="quotes" className="text-sm">Show Quotes</label>
                                    <Switch.Root
                                        id="quotes"
                                        checked={settings.showQuotes}
                                        onCheckedChange={() => setSettings(prev => ({ ...prev, showQuotes: !prev.showQuotes }))}
                                        className="w-11 h-6 bg-zinc-700 rounded-full relative data-[state=checked]:bg-blue-600"
                                    >
                                        <Switch.Thumb className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
                                    </Switch.Root>
                                </div>

                                {/* Image Categories */}
                                <Categories
                                    categories={settings.categories}
                                    onCategoryChange={handleCategoryChange}
                                />

                                {/* Favorite Links Section */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium">Favorite Links</h3>
                                        {Array.isArray(editingLinks) && editingLinks.length < 10 && (
                                            <button
                                                onClick={() => {
                                                    const newLink = {
                                                        id: Math.random().toString(36).substr(2, 9),
                                                        url: '',
                                                        title: '',
                                                        icon: null
                                                    };
                                                    setEditingLinks([...editingLinks, newLink]);
                                                }}
                                                className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                                            >
                                                <Plus className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>
                                    <div className="space-y-6">
                                        {Array.isArray(editingLinks) && editingLinks.map((link) => (
                                            <div key={link.id} className="flex items-start space-x-2 p-3 rounded-lg bg-zinc-800/50">
                                                <div className="flex-1 space-y-2">
                                                    <input
                                                        type="text"
                                                        value={link.title}
                                                        onChange={(e) => handleUpdateLink(link.id, 'title', e.target.value)}
                                                        placeholder="Site Name"
                                                        className="w-full px-3 py-2 bg-zinc-800 rounded text-sm"
                                                    />
                                                    <input
                                                        type="url"
                                                        value={link.url}
                                                        onChange={(e) => handleUpdateLink(link.id, 'url', e.target.value)}
                                                        placeholder="https://..."
                                                        className="w-full px-3 py-2 bg-zinc-800 rounded text-sm"
                                                    />
                                                </div>
                                                <button
                                                    onClick={() => handleRemoveLink(link.id)}
                                                    className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer with buttons - fixed at bottom */}
                        <div className="p-6 border-t border-zinc-800 bg-zinc-900">
                            <div className="flex justify-end space-x-2">
                                <Dialog.Close className="px-4 py-2 rounded bg-zinc-800 text-white/60 hover:text-white transition-colors">
                                    Cancel
                                </Dialog.Close>
                                <button
                                    onClick={handleSaveLinks}
                                    className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            {/* Image Attribution */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
                {imageAttribution && (
                    <div className="text-white/80 text-sm space-x-1.5 backdrop-blur-sm bg-black/40 px-4 py-2 rounded-lg shadow-lg border border-white/10">
                        <span>Photo</span>
                        <a
                            href={imageAttribution?.attributionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-300 transition-colors"
                        >
                            on Lummi
                        </a>
                        <span>by</span>
                        <a
                            href={`https://www.lummi.ai/creator/${imageAttribution?.username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-300 transition-colors font-medium"
                        >
                            {imageAttribution?.name}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App; 