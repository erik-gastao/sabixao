import { Router, type Request, type Response } from 'express';
import { z } from 'zod';
import { createQuestao, createSala, getSalaById, getSalaByPin, listQuestoesBySala, listSalas } from '../data/store';

const salasRouter = Router();

const createSalaSchema = z.object({
  name: z.string().min(3),
  maxPlayers: z.number().int().positive().max(200).default(50),
  creatorId: z.string().uuid()
});

const createQuestaoSchema = z.object({
  text: z.string().min(4),
  type: z.enum(['multiple-choice', 'true-false', 'text']).default('multiple-choice'),
  timeLimit: z.number().int().positive().max(120).default(30),
  opcoes: z.array(z.object({
    text: z.string().min(1),
    isCorrect: z.boolean()
  })).min(2)
});

salasRouter.get('/', (req: Request, res: Response) => {
  const creatorId = typeof req.query.creatorId === 'string' ? req.query.creatorId : undefined;
  return res.json(listSalas(creatorId));
});

salasRouter.get('/:id', (req: Request, res: Response) => {
  const sala = getSalaById(req.params.id);
  if (sala == null) {
    return res.status(404).json({ message: 'Sala não encontrada.' });
  }
  return res.json(sala);
});

salasRouter.get('/pin/:pin', (req: Request, res: Response) => {
  const sala = getSalaByPin(req.params.pin);
  if (sala == null) {
    return res.status(404).json({ message: 'Sala não encontrada.' });
  }
  return res.json(sala);
});

salasRouter.post('/', (req: Request, res: Response) => {
  const parse = createSalaSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ errors: parse.error.flatten() });
  }

  const sala = createSala(parse.data);
  return res.status(201).json(sala);
});

salasRouter.get('/:id/questoes', (req: Request, res: Response) => {
  const sala = getSalaById(req.params.id);
  if (sala == null) {
    return res.status(404).json({ message: 'Sala não encontrada.' });
  }
  return res.json(listQuestoesBySala(sala.id));
});

salasRouter.post('/:id/questoes', (req: Request, res: Response) => {
  const sala = getSalaById(req.params.id);
  if (sala == null) {
    return res.status(404).json({ message: 'Sala não encontrada.' });
  }

  const parse = createQuestaoSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ errors: parse.error.flatten() });
  }

  const questao = createQuestao({
    salaId: sala.id,
    text: parse.data.text,
    type: parse.data.type,
    timeLimit: parse.data.timeLimit,
    opcoes: parse.data.opcoes
  });

  return res.status(201).json(questao);
});

export default salasRouter;
