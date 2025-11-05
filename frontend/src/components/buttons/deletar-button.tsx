"use client";
import IconButton from './icon-button';

interface DeletarButtonProps {
    onClick: () => void;
    title?: string;
    disabled?: boolean;
    className?: string;
}

export default function DeletarButton({
    onClick,
    title = "Deletar",
    disabled = false,
    className = ''
}: DeletarButtonProps) {
    return (
        <IconButton 
            type="delete"
            onClick={onClick}
            title={title}
            disabled={disabled}
            className={className}
        />
    );
}
