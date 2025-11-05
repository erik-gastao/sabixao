"use client";
import Button from './button';

interface VoltarButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export default function VoltarButton({
    onClick,
    disabled = false,
    className = ''
}: VoltarButtonProps) {
    return (
        <Button 
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            ← Voltar
        </Button>
    );
}
