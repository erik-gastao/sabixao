import { createServer } from 'http';
import { createApp } from './app';

const PORT = process.env.PORT ?? '3001';

const app = createApp();
const server = createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 Sabixão backend rodando em http://localhost:${PORT}`);
});
