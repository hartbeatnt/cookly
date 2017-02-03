import { Server } from 'http';
import Express from 'express';

import initialize from './initialize';

const app = Express();
const server = Server(app);

const PORT = process.env.PORT || 3001;

(async () => {
  await initialize({
    server,
    app
  });

  server.listen(PORT);
  console.log(`app listening on port ${PORT}`);
})();
