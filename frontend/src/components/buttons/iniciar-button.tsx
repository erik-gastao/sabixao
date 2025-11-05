"use client";
import Button from './button';

interface IniciarButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export default function IniciarButton({
    onClick,
    children = "INICIAR QUIZ",
    disabled = false,
    className = ''
}: IniciarButtonProps) {
    return (
        <Button 
            onClick={onClick}
            disabled={disabled}
            className={className}
            type="button"
        >
            {children}
        </Button>
    );
}
