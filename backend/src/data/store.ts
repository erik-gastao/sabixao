import { randomUUID } from 'crypto';
import { Sala, User, Questao, Opcao } from '../types';

interface DataStore {
  users: User[];
  salas: Sala[];
  questoes: Questao[];
  opcoes: Opcao[];
}

const now = new Date().toISOString();

const seedUser: User = {
  id: randomUUID(),
  email: 'demo@sabixao.dev',
  password: '123456',
  name: 'Demo User',
  createdAt: now
};

const seedSala: Sala = {
  id: randomUUID(),
  name: 'Sala Demo',
  pin: '123456',
  creatorId: seedUser.id,
  status: 'waiting',
  maxPlayers: 20,
  createdAt: now
};

const seedQuestao: Questao = {
  id: randomUUID(),
  salaId: seedSala.id,
  text: 'Qual é a capital do Brasil?',
  type: 'multiple-choice',
  timeLimit: 30,
  order: 1
};

const seedOpcoes: Opcao[] = [
  {
    id: randomUUID(),
    questaoId: seedQuestao.id,
    text: 'Brasília',
    isCorrect: true,
    order: 1
  },
  {
    id: randomUUID(),
    questaoId: seedQuestao.id,
    text: 'Rio de Janeiro',
    isCorrect: false,
    order: 2
  },
  {
    id: randomUUID(),
    questaoId: seedQuestao.id,
    text: 'São Paulo',
    isCorrect: false,
    order: 3
  }
];

const store: DataStore = {
  users: [seedUser],
  salas: [seedSala],
  questoes: [seedQuestao],
  opcoes: [...seedOpcoes]
};

export function listSalas (creatorId?: string): Sala[] {
  if (creatorId == null) return store.salas;
  return store.salas.filter((sala) => sala.creatorId === creatorId);
}

export function getSalaById (id: string): Sala | undefined {
  return store.salas.find((sala) => sala.id === id);
}

export function getSalaByPin (pin: string): Sala | undefined {
  return store.salas.find((sala) => sala.pin === pin);
}

export function createSala (input: Pick<Sala, 'name' | 'maxPlayers' | 'creatorId'>): Sala {
  const sala: Sala = {
    id: randomUUID(),
    name: input.name,
    pin: String(Math.floor(100000 + Math.random() * 900000)),
    creatorId: input.creatorId,
    status: 'waiting',
    maxPlayers: input.maxPlayers,
    createdAt: new Date().toISOString()
  };
  store.salas.push(sala);
  return sala;
}

export function listQuestoesBySala (salaId: string): Array<Questao & { opcoes: Opcao[] }> {
  return store.questoes
    .filter((questao) => questao.salaId === salaId)
    .map((questao) => ({
      ...questao,
      opcoes: store.opcoes.filter((opcao) => opcao.questaoId === questao.id)
    }));
}

export function createQuestao (input: Pick<Questao, 'salaId' | 'text' | 'type' | 'timeLimit'> & { opcoes: Array<Pick<Opcao, 'text' | 'isCorrect'>> }): Questao {
  const questao: Questao = {
    id: randomUUID(),
    salaId: input.salaId,
    text: input.text,
    type: input.type,
    timeLimit: input.timeLimit,
    order: store.questoes.filter((q) => q.salaId === input.salaId).length + 1
  };

  store.questoes.push(questao);

  input.opcoes.forEach((opcao, index) => {
    store.opcoes.push({
      id: randomUUID(),
      questaoId: questao.id,
      text: opcao.text,
      isCorrect: opcao.isCorrect,
      order: index + 1
    });
  });

  return questao;
}

export function getUserByEmail (email: string): User | undefined {
  return store.users.find((user) => user.email === email);
}

export function createUser (input: Pick<User, 'email' | 'password' | 'name'>): User {
  const user: User = {
    id: randomUUID(),
    email: input.email,
    password: input.password,
    name: input.name,
    createdAt: new Date().toISOString()
  };
  store.users.push(user);
  return user;
}
