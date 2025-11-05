"use client";
import styles from './button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export default function Button({
    children,
    onClick,
    disabled = false,
    type = 'button',
    className = '',
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${styles.gameButton} ${disabled ? styles.gameButtonDisabled : ''} ${className}`}
        >
            {children}
        </button>
    );
}