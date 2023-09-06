import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://127.0.0.1:27017/crud_tareas");
    console.log("Base de datos conenctada a", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
