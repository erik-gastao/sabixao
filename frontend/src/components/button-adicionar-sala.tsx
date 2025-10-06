"use client";
import { useRouter } from 'next/navigation';
import DeleteIconButton from './delete-icon-button';
import styles from './button-adicionar-sala.module.css';

interface ButtonAdicionarSalaProps {
    nomePergunta?: string;
    descricaoSala?: string;
    isNew?: boolean;
    onClick?: () => void;
    questaoId?: number | string;
    salaId?: number | string;
    onDelete?: () => void;
}

export default function ButtonAdicionarSala({ 
    nomePergunta,
    descricaoSala = "Lorem ipsum dolor sit ama...",
    isNew = false,
    onClick,
    questaoId,
    salaId,
    onDelete
}: ButtonAdicionarSalaProps) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (isNew) {
            router.push('/criar-sala');
        } else if (questaoId && salaId) {
            // Redireciona para a página de editar questão
            router.push(`/editar-questao?salaId=${salaId}&questaoId=${questaoId}`);
        }
    };

    const handleDelete = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onDelete) {
            onDelete();
        }
    };

    return (
        <div className={styles.buttonWrapper}>
            {/* Botão com nome e descrição */}
            {!isNew && nomePergunta && (
                <div className={styles.perguntaRow}>
                    <span className={styles.nLabel}>{nomePergunta}</span>
                    <button className={styles.buttonDescricao} onClick={handleClick}>
                        <span className={styles.descricao}>{descricaoSala}</span>
                    </button>
                    {onDelete && (
                        <div className={styles.deleteButtonContainer}>
                            <DeleteIconButton onClick={handleDelete} />
                        </div>
                    )}
                </div>
            )}
            
            {/* Botão de adicionar */}
            {isNew && (
                <button 
                    className={styles.buttonNovo}
                    onClick={handleClick}
                >
                    <div className={styles.iconPlus}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect x="2" y="2" width="36" height="36" rx="4" stroke="white" strokeWidth="3"/>
                            <line x1="20" y1="10" x2="20" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                            <line x1="10" y1="20" x2="30" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                </button>
            )}
        </div>
    );
}
