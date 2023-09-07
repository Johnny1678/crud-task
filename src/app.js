import express from "express";
import path from "path";
import morgan from "morgan";
import { create } from "express-handlebars";

import indexRoutes from "./routes/index.routes.js";

const app = express();

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

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(indexRoutes);

// public route
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res.status(404).render("404");
});

export default app;
