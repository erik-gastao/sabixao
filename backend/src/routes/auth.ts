import { Router, type Request, type Response } from 'express';
import { z } from 'zod';
import { createUser, getUserByEmail } from '../data/store';
import type { AuthTokenPayload } from '../types';

const authRouter = Router();

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  name: z.string().min(2)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4)
});

function makeToken (user: { id: string; email: string; name: string }): AuthTokenPayload {
  return {
    token: Buffer.from(`${user.id}:${Date.now()}`).toString('base64'),
    user
  };
}

authRouter.post('/register', (req: Request, res: Response) => {
  const parse = registerSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ errors: parse.error.flatten() });
  }

  const existing = getUserByEmail(parse.data.email);
  if (existing != null) {
    return res.status(409).json({ message: 'E-mail já cadastrado.' });
  }

  const user = createUser(parse.data);

  return res.status(201).json(makeToken({
    id: user.id,
    email: user.email,
    name: user.name
  }));
});

authRouter.post('/login', (req: Request, res: Response) => {
  const parse = loginSchema.safeParse(req.body);
  if (!parse.success) {
    return res.status(400).json({ errors: parse.error.flatten() });
  }

  const user = getUserByEmail(parse.data.email);
  if (user == null || user.password !== parse.data.password) {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }

  return res.json(makeToken({
    id: user.id,
    email: user.email,
    name: user.name
  }));
});

export default authRouter;
