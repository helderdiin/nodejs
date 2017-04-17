import app from './app';

import { APP } from './config';

app.listen(APP.port, () => {
  console.log(`App listening on port ${APP.port}. ;)`);
});