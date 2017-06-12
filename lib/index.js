import app from './app';

import { APP } from './config';

app.listen(APP.port, APP.host,() => {
  console.log(`App listening on port ${APP.host}:${APP.port}. ;)`);
});