import express from "express";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";

import indexRoutes from "./routes/index.routes.js";

const app = express();

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))


//Configuracion express-handlebars
app.set("views", path.join(__dirname, "views"));
const config = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaulLayout: "main",
  extname: ".hbs",
});
app.engine(".hbs", config.engine);
app.set("view engine", ".hbs");



//Routes 
app.use(indexRoutes);

export default app;
