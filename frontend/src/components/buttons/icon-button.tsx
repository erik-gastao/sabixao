"use client";
import styles from './icon-button.module.css';

interface IconButtonProps {
    onClick: () => void;
    type?: 'edit' | 'save' | 'cancel' | 'delete' | 'add';
    title?: string;
    disabled?: boolean;
    className?: string;
}

export default function IconButton({
    onClick,
    type = 'edit',
    title,
    disabled = false,
    className = ''
}: IconButtonProps) {
    const getIcon = () => {
        switch (type) {
            case 'edit':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                    </svg>
                );
            case 'save':
                return '✓';
            case 'cancel':
                return '✕';
            case 'delete':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                    </svg>
                );
            case 'add':
                return (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                );
            default:
                return null;
        }
    };

    const getButtonClass = () => {
        const baseClass = styles.iconButton;
        const typeClass = styles[`${type}Button`];
        return `${baseClass} ${typeClass} ${className}`;
    };

    return (
        <button 
            className={getButtonClass()}
            onClick={onClick}
            title={title}
            disabled={disabled}
            type="button"
        >
            {getIcon()}
        </button>
    );
}
