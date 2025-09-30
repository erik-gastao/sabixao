"use client";
import { useState } from 'react';
import Button from '../components/button';
import Input from '../components/input';

export default function TelaInicial() {
    const [nome, setNome] = useState('');
    
    const handleCriar = () => {
        console.log('Criar clicado!', nome);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">Sabixão</h1>
            
            <div className="w-full max-w-md space-y-6">
                <Input 
                    label="Nome da Sala"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                
                <Button onClick={handleCriar} className="w-full">
                    CRIAR
                </Button>
            </div>
        </div>
    );
}