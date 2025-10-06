"use client";
import IconButton from './icon-button';

interface EditarButtonProps {
    onClick: () => void;
    title?: string;
    disabled?: boolean;
    className?: string;
}

export default function EditarButton({
    onClick,
    title = "Editar",
    disabled = false,
    className = ''
}: EditarButtonProps) {
    return (
        <IconButton 
            type="edit"
            onClick={onClick}
            title={title}
            disabled={disabled}
            className={className}
        />
    );
}
