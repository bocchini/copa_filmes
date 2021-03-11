import app from './app';
import db from './db';

import getDataApi from './services/MoviesApi';

(async () => {
  try {
    const port = parseInt(`${process.env.PORT}`);

    const resultDb = await db.sync();
    console.log(`Running database name: ${process.env.DB_NAME}`);
    //console.log(resultDb);

    console.log('Consulting API Waiting');
    await getDataApi();

    app.listen(port);

    console.log(`Running on port ${port}`);
  } catch (error) {
    console.log(error);
  }
})();
