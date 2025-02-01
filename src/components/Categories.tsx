import { Switch } from '@/components/ui/switch';

interface Category {
    id: string;
    name: string;
    enabled: boolean;
}

interface CategoriesProps {
    categories: Category[];
    onToggle: (id: string) => void;
}

export function Categories({ categories, onToggle }: CategoriesProps) {
    if (!categories || categories.length === 0) {
        return null;
    }

    console.log('Rendering categories:', categories.length);

    return (
        <div
            className="categories-grid w-full"
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '0.75rem'
            }}
        >
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="flex items-center justify-between rounded-lg bg-zinc-800/50 p-3 hover:bg-white/10 transition-colors"
                >
                    <span className="text-white/80">{category.name}</span>
                    <Switch
                        checked={category.enabled}
                        onCheckedChange={() => onToggle(category.id)}
                    />
                </div>
            ))}
        </div>
    );
} 