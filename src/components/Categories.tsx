import { FC } from 'react';
import * as Switch from '@radix-ui/react-switch';

interface CategoriesProps {
    categories: { [key: string]: boolean };
    onCategoryChange: (category: string) => void;
}

// Make the component more explicit
export const Categories: FC<CategoriesProps> = ({ categories, onCategoryChange }) => {
    // Log when the component renders
    console.log('Categories component rendering with:', Object.keys(categories).length, 'categories');

    // Force evaluation
    if (!categories || typeof onCategoryChange !== 'function') {
        console.error('Invalid props provided to Categories component');
        return null;
    }

    return (
        <div className="categories-section !space-y-0">
            <h3 className="text-sm font-medium mb-4" id="categories-heading">Image Categories</h3>
            <div className="!grid !grid-cols-2 !gap-3 !w-full">
                {Object.entries(categories).map(([category, enabled]) => (
                    <div
                        key={category}
                        className="flex items-center justify-between bg-zinc-800/50 rounded-lg p-3"
                    >
                        <label
                            htmlFor={category}
                            className="text-base capitalize"
                        >
                            {category}
                        </label>
                        <Switch.Root
                            id={category}
                            checked={enabled}
                            onCheckedChange={() => onCategoryChange(category)}
                            className="w-11 h-6 bg-zinc-700 rounded-full relative data-[state=checked]:bg-blue-600"
                        >
                            <Switch.Thumb
                                className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]"
                            />
                        </Switch.Root>
                    </div>
                ))}
            </div>
        </div>
    );
}; 