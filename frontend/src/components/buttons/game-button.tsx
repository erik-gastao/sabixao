"use client";
import Button from './button';

/**
 * Variante do botão de jogo
 */
export type GameButtonVariant = 'create' | 'start' | 'back' | 'primary' | 'secondary';

/**
 * Props do GameButton
 */
interface GameButtonProps {
    /** Variante do botão (determina texto e estilo padrão) */
    variant?: GameButtonVariant;
    /** Função chamada ao clicar no botão */
    onClick?: () => void;
    /** Conteúdo do botão (sobrescreve o padrão da variante) */
    children?: React.ReactNode;
    /** Se o botão está desabilitado */
    disabled?: boolean;
    /** Tipo do botão HTML */
    type?: 'button' | 'submit' | 'reset';
    /** Classes CSS adicionais */
    className?: string;
}

/**
 * Conteúdo padrão para cada variante
 */
const defaultContent: Record<GameButtonVariant, React.ReactNode> = {
    create: 'CRIAR',
    start: 'INICIAR QUIZ',
    back: '← Voltar',
    primary: 'CONFIRMAR',
    secondary: 'CANCELAR'
};

/**
 * GameButton - Componente genérico para botões principais do jogo
 * 
 * Substitui: criar-button, iniciar-button, voltar-button
 * 
 * @example
 * // Botão de criar
 * <GameButton variant="create" onClick={handleCreate} />
 * 
 * @example
 * // Botão de iniciar com texto customizado
 * <GameButton variant="start" onClick={handleStart}>COMEÇAR AGORA</GameButton>
 * 
 * @example
 * // Botão de voltar
 * <GameButton variant="back" onClick={() => router.back()} />
 * 
 * @example
 * // Botão genérico com conteúdo customizado
 * <GameButton onClick={handleSave}>SALVAR ALTERAÇÕES</GameButton>
 * 
 * @example
 * // Botão de submit em formulário
 * <GameButton variant="create" type="submit">ENVIAR</GameButton>
 */
export default function GameButton({
    variant = 'primary',
    onClick,
    children,
    disabled = false,
    type = 'button',
    className = ''
}: GameButtonProps) {
    return (
        <Button 
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={className}
        >
            {children || defaultContent[variant]}
        </Button>
    );
}
