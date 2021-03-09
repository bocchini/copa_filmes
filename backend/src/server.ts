import app from './app';
import db from './db';

import getDataApi from './services/MoviesApi';

(async () => {
  try {
    const port = parseInt(`${process.env.PORT}`);

    await db.sync();
    console.log(`Running database name: ${process.env.DB_NAME}`);

    await getDataApi();

    app.listen(port);

    console.log(`Running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
})();
