"use client";
import React from "react";
import styles from "./button.module.css";

type Size = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: Size;
    type?: ButtonType; // tipagem específica ao invés de string
    className?: string;
}

export default function Button({
    children,
    size = "md",
    type = "button",
    className = "",
    disabled = false,
    ...rest
}: ButtonProps) {
    const sizeClass = size === "sm" ? styles.small : size === "lg" ? styles.large : "";
    return (
        <button
            type={type}
            disabled={disabled}
            className={`${styles.gameButton} ${disabled ? styles.gameButtonDisabled : ""} ${sizeClass} ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
}