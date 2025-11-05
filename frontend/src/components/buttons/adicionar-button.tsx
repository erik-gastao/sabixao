"use client";
import IconButton from './icon-button';

interface AdicionarButtonProps {
    onClick: () => void;
    title?: string;
    disabled?: boolean;
    className?: string;
}

export default function AdicionarButton({
    onClick,
    title = "Adicionar",
    disabled = false,
    className = ''
}: AdicionarButtonProps) {
    return (
        <IconButton 
            type="add"
            onClick={onClick}
            title={title}
            disabled={disabled}
            className={className}
        />
    );
}
