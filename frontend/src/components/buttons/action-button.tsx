"use client";
import IconButton from './icon-button';

/**
 * Tipo de ação do botão
 */
export type ActionType = 'add' | 'edit' | 'delete' | 'save' | 'cancel';

/**
 * Props do ActionButton
 */
interface ActionButtonProps {
    /** Tipo de ação (determina o ícone e título padrão) */
    action: ActionType;
    /** Função chamada ao clicar no botão */
    onClick: () => void;
    /** Título customizado (sobrescreve o padrão) */
    title?: string;
    /** Se o botão está desabilitado */
    disabled?: boolean;
    /** Classes CSS adicionais */
    className?: string;
}

/**
 * Títulos padrão para cada ação
 */
const defaultTitles: Record<ActionType, string> = {
    add: 'Adicionar',
    edit: 'Editar',
    delete: 'Deletar',
    save: 'Salvar',
    cancel: 'Cancelar'
};

/**
 * ActionButton - Componente genérico para botões de ação com ícones
 * 
 * Substitui: adicionar-button, editar-button, deletar-button, salvar-button, cancelar-button
 * 
 * @example
 * // Botão de adicionar
 * <ActionButton action="add" onClick={handleAdd} />
 * 
 * @example
 * // Botão de editar com título customizado
 * <ActionButton action="edit" onClick={handleEdit} title="Editar Questão" />
 * 
 * @example
 * // Botão de deletar desabilitado
 * <ActionButton action="delete" onClick={handleDelete} disabled={true} />
 */
export default function ActionButton({
    action,
    onClick,
    title,
    disabled = false,
    className = ''
}: ActionButtonProps) {
    return (
        <IconButton 
            type={action}
            onClick={onClick}
            title={title || defaultTitles[action]}
            disabled={disabled}
            className={className}
        />
    );
}
