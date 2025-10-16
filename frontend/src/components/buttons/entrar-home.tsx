"use client";
import React from "react";
import ButtonBase from "./button";

type Size = "sm" | "md" | "lg";
type ButtonType = "button" | "submit" | "reset";

interface EntrarHomeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  type?: ButtonType;
}

/**
 * Wrapper para o botão da tela Home.
 * Usa o Button genérico e define texto padrão "ENTRAR".
 * Props como `type`, `onClick`, `className` e `disabled` podem ser passadas/sobrescritas.
 */
export default function EntrarHomeButton({
  children = "ENTRAR",
  size = "md",
  type = "button",
  ...props
}: EntrarHomeProps) {
  return (
    <ButtonBase size={size} {...props}>
      {children}
    </ButtonBase>
  );
}