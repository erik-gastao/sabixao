import styles from './delete-icon-button.module.css';

interface DeleteIconButtonProps {
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    title?: string;
}

export default function DeleteIconButton({ 
    onClick, 
    className = '', 
    title = 'Deletar' 
}: DeleteIconButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${styles.deleteButton} ${className}`}
            title={title}
            aria-label={title}
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
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}
