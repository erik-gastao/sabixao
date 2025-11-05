"use client";
import { useState } from 'react';
import styles from './input.module.css';

interface InputProps {
    type?: 'text' | 'email' | 'password' | 'number' | 'search';
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    id?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
    label: string; // Label é obrigatório neste componente
    error?: string;
    maxLength?: number;
}

export default function Input({
    type = 'text',
    placeholder,
    value = '',
    onChange,
    name,
    id,
    required = false,
    disabled = false,
    className = '',
    label,
    error,
    maxLength,
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, '-');
    
    // Determina se o label deve estar flutuando (quando em foco ou com valor)
    const isFloating = isFocused || value !== '';
    
    return (
        <div className={styles.floatingInputContainer}>
            <div className={`${styles.inputWrapper} ${isFloating ? styles.inputWrapperActive : ''} ${error ? styles.inputWrapperError : ''} ${disabled ? styles.inputWrapperDisabled : ''}`}>
                <input
                    type={type}
                    id={inputId}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={isFloating ? placeholder : ''}
                    required={required}
                    disabled={disabled}
                    maxLength={maxLength}
                    className={`${styles.floatingInput} ${className}`}
                />
                <label 
                    htmlFor={inputId} 
                    className={`${styles.floatingLabel} ${isFloating ? styles.floatingLabelActive : ''}`}
                >
                    {label}
                    {required && <span className={styles.requiredMark}>*</span>}
                </label>
            </div>
            
            {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
    );
}