"use client";
import Button from './button';

interface CriarButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export default function CriarButton({
    onClick,
    children = "CRIAR",
    disabled = false,
    className = ''
}: CriarButtonProps) {
    return (
        <Button 
            onClick={onClick}
            disabled={disabled}
            className={className}
            type="button"
        >
            {children}
        </Button>
    );
}
