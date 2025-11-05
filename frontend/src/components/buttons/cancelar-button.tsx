"use client";
import IconButton from './icon-button';

interface CancelarButtonProps {
    onClick: () => void;
    title?: string;
    disabled?: boolean;
    className?: string;
}

export default function CancelarButton({
    onClick,
    title = "Cancelar",
    disabled = false,
    className = ''
}: CancelarButtonProps) {
    return (
        <IconButton 
            type="cancel"
            onClick={onClick}
            title={title}
            disabled={disabled}
            className={className}
        />
    );
}
