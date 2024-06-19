// import createConnectionPool from '@databases/mysql';
// createConnectionPool(process.env.DATABASE_ENV_VAR);

import createConnectionPool from '@databases/pg';
import "dotenv/config";

const db = createConnectionPool(
    process.env.DATABASE_ENV_VAR
  );

export default db