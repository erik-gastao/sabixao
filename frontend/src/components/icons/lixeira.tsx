"use client";
import styles from './lixeira.module.css';

interface LixeiraProps {
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    title?: string;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
}

export default function Lixeira({ 
    onClick,
    className = '',
    title = 'Apagar',
    disabled = false,
    size = 'md'
}: LixeiraProps) {
    
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        
        if (disabled) return;
        
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={`${styles.icon} ${styles[size]} ${disabled ? styles.disabled : ''} ${className}`}
            title={title}
            aria-label={title}
            disabled={disabled}
        >
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M3 6H21M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6H19Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
                <path 
                    d="M10 11V17M14 11V17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}
