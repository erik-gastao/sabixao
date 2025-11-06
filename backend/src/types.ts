export type SalaStatus = 'draft' | 'waiting' | 'running' | 'finished';

export type QuestaoType = 'multiple-choice' | 'true-false' | 'text';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: string;
}

export interface Sala {
  id: string;
  name: string;
  pin: string;
  creatorId: string;
  status: SalaStatus;
  maxPlayers: number;
  createdAt: string;
}

export interface Questao {
  id: string;
  salaId: string;
  text: string;
  type: QuestaoType;
  timeLimit: number;
  order: number;
}

export interface Opcao {
  id: string;
  questaoId: string;
  text: string;
  isCorrect: boolean;
  order: number;
}

export interface Partida {
  id: string;
  salaId: string;
  status: 'waiting' | 'started' | 'ended';
  startedAt?: string;
  endedAt?: string;
}

export interface Jogador {
  id: string;
  partidaId: string;
  name: string;
  userId?: string;
  isGuest: boolean;
  score: number;
}

export interface Resposta {
  id: string;
  jogadorId: string;
  questaoId: string;
  opcaoId?: string;
  timeUsed: number;
  points: number;
}

export interface AuthTokenPayload {
  token: string;
  user: Pick<User, 'id' | 'email' | 'name'>;
}
