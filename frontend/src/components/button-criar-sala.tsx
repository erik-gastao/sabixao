"use client";
import { useRouter } from 'next/navigation';
import styles from './button-criar-sala.module.css';

interface ButtonCriarSalaProps {
    nomeSala?: string;
    isNew?: boolean;
    onClick?: () => void;
}

export default function ButtonCriarSala({ 
    nomeSala, 
    isNew = false,
    onClick 
}: ButtonCriarSalaProps) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (isNew) {
            // Se for o botão de criar nova sala, redireciona para /criar-sala
            router.push('/criar-sala');
        } else {
            // Se for uma sala existente, pode abrir a sala
            console.log('Abrindo sala:', nomeSala);
            // router.push(`/sala/${pinSala}`);
        }
    };

    return (
        <button 
            className={isNew ? styles.buttonNovaSala : styles.buttonSala}
            onClick={handleClick}
        >
            {isNew ? (
                <div className={styles.iconPlus}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="2" y="2" width="36" height="36" rx="4" stroke="white" strokeWidth="3"/>
                        <line x1="20" y1="10" x2="20" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                        <line x1="10" y1="20" x2="30" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </div>
            ) : (
                <span className={styles.nomeSala}>{nomeSala}</span>
            )}
        </button>
    );
}
