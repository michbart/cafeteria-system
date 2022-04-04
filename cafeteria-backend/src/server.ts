import Logger from './core/logger';
import { port } from './config';
import app from './app';

console.log(`Server running on port: ${port}`);
app.listen(port, () => { Logger.info(`server running on port : ${port}`); })
    .on('error', e => Logger.error(e));
