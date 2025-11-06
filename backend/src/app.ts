import express, { type Application, type Request, type Response } from 'express';
import cors from 'cors';
import authRouter from './routes/auth';
import salasRouter from './routes/salas';

export function createApp (): Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get('/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.use('/api/auth', authRouter);
  app.use('/api/salas', salasRouter);

  app.use((req: Request, res: Response) => {
    res.status(404).json({ message: `Rota ${req.method} ${req.path} não encontrada.` });
  });

  return app;
}
