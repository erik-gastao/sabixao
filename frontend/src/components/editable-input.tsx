"use client";
import { useState } from 'react';
import Input from './input';
import EditarButton from './editar-button';
import SalvarButton from './salvar-button';
import CancelarButton from './cancelar-button';
import styles from './editable-input.module.css';

interface EditableInputProps {
    label: string;
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export default function EditableInput({
    label,
    value,
    onChange,
    placeholder,
    disabled = false
}: EditableInputProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [tempValue, setTempValue] = useState(value);

    const handleEdit = () => {
        if (!disabled) {
            setIsEditing(true);
            setTempValue(value);
        }
    };

    const handleSave = () => {
        onChange(tempValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempValue(value);
        setIsEditing(false);
    };

    return (
        <div className={styles.editableInputContainer}>
            <Input 
                label={value}
                type="text"
                value={isEditing ? tempValue : value}
                onChange={(e) => setTempValue(e.target.value)}
                disabled={!isEditing}
                placeholder={placeholder}
            />
            
            {!isEditing ? (
                <EditarButton 
                    onClick={handleEdit}
                    title="Editar"
                    disabled={disabled}
                    className={styles.editButton}
                />
            ) : (
                <div className={styles.editActions}>
                    <SalvarButton 
                        onClick={handleSave}
                        title="Salvar"
                    />
                    <CancelarButton 
                        onClick={handleCancel}
                        title="Cancelar"
                    />
                </div>
            )}
        </div>
    );
}
