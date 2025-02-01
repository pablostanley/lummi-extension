export interface FavoriteLink {
    id: string;
    name: string;
    url: string;
    iconUrl?: string;
}

export interface Settings {
    showQuotes: boolean;
    categories: {
        [key: string]: boolean;
    };
    favoriteLinks: FavoriteLink[];
}

export const defaultCategories = {
    'nature': true,
    'architecture': true,
    'art': true,
    'people': true,
    'animals': true,
    'food': false,
    'travel': true,
    'technology': false,
    'abstract': false,
    'fashion': true,
    'space': false
};

const defaultLinks: FavoriteLink[] = [
    {
        id: '1',
        name: 'Lummi',
        url: 'https://lummi.ai',
    },
    {
        id: '2',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com',
    },
    {
        id: '3',
        name: 'Bluesky',
        url: 'https://bsky.app',
    },
    {
        id: '4',
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
    }
];

export const defaultSettings: Settings = {
    showQuotes: true,
    categories: defaultCategories,
    favoriteLinks: defaultLinks
}; 