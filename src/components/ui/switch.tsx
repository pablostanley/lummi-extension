import * as SwitchPrimitive from '@radix-ui/react-switch';

interface SwitchProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}

export function Switch({ checked, onCheckedChange }: SwitchProps) {
    return (
        <SwitchPrimitive.Root
            checked={checked}
            onCheckedChange={onCheckedChange}
            className="w-11 h-6 bg-zinc-700 rounded-full relative data-[state=checked]:bg-blue-600"
        >
            <SwitchPrimitive.Thumb
                className="block w-5 h-5 bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]"
            />
        </SwitchPrimitive.Root>
    );
} 