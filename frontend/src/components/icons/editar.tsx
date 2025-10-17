"use client";
import { FiEdit2 } from 'react-icons/fi';

interface EditarIconProps {
    onClick: () => void;
    title?: string;
    disabled?: boolean;
    className?: string;
    size?: number;
}

export default function EditarIcon({
    onClick,
    title = "Editar",
    disabled = false,
    className = '',
    size = 24
}: EditarIconProps) {
    return (
        <span 
            role="button"
            onClick={disabled ? undefined : onClick}
            title={title}
            className={className}
            tabIndex={0}
            style={{ 
                opacity: disabled ? 0.6 : 1,
                cursor: disabled ? 'not-allowed' : 'pointer'
            }}
        >
            <FiEdit2 size={size} />
        </span>
    );
}
