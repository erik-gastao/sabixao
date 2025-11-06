export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface Sala {
  id: string;
  name: string;
  pin: string;
  creatorId: string;
  status: 'draft' | 'waiting' | 'running' | 'finished';
  maxPlayers: number;
  createdAt: string;
}

export interface CreateSalaRequest {
  name: string;
  maxPlayers: number;
  creatorId: string;
}

export interface Questao {
  id: string;
  salaId: string;
  text: string;
  type: 'multiple-choice' | 'true-false' | 'text';
  timeLimit: number;
  order: number;
  opcoes?: Opcao[];
}

export interface Opcao {
  id: string;
  questaoId: string;
  text: string;
  isCorrect: boolean;
  order: number;
}
