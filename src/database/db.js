import knex from "knex";
import Oracle from "oracledb";

Oracle.initOracleClient({ libDir: "C:\\Node\\instantclient_19_6_win64" });

const db = knex({
  
  client: "oracledb",
  connection: {
    host: "10.5.0.15",
    user: "dbamv",
    password: "inovar2013",
    database: "prd",
  },
  pool: {
    min: 1,
    max: 5,
  },
});

export default db;