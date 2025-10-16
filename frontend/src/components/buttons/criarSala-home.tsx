"use client";
import React from "react";
import ButtonBase from "./button";

type Size = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";

interface CriarSalaHomeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  type?: ButtonType;
}

/**
 * Wrapper para o botão "CRIAR SALA" da tela Home.
 * Usa o Button genérico e define texto padrão "CRIAR SALA".
 * Props como `onClick`, `className` e `disabled` podem ser passadas/sobrescritas.
 */
export default function CriarSalaHomeButton({
  children = "CRIAR SALA",
  size = "md",
  type = "button",
  ...props
}: CriarSalaHomeProps) {
  return (
    <ButtonBase size={size} {...props}>
      {children}
    </ButtonBase>
  );
}