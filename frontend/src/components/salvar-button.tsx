"use client";
import IconButton from './icon-button';

interface SalvarButtonProps {
    onClick: () => void;
    title?: string;
    disabled?: boolean;
    className?: string;
}

export default function SalvarButton({
    onClick,
    title = "Salvar",
    disabled = false,
    className = ''
}: SalvarButtonProps) {
    return (
        <IconButton 
            type="save"
            onClick={onClick}
            title={title}
            disabled={disabled}
            className={className}
        />
    );
}
