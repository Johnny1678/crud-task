import { connect } from "mongoose";
import { MONGODB_URI } from "../config.js";



(async () => {
  try {
    const db = await connect(MONGODB_URI);
    console.log("Base de datos conenctada a", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
