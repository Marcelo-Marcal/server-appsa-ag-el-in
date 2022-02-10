import knex from "knex";
import Oracle from "oracledb";
// import db from "./db";

// Oracle.initOracleClient({ libDir: "C:\\Node\\instantclient_19_6_win64" });
// Oracle.initOracleClient({ libDir: "/home/marcelo/Documentos/DataIntegra/DB/instantclient_19_6_win64" });

const db = knex({

  client: "oracledb",
  connection: {
    host: "10.11.0.3",
    user: "dbamv",
    password: "inovar2013",
    database: "mvtest",
  },
  pool: {
    min: 1,
    max: 5,
  },
});

export { db };