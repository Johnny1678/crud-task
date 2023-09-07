import app from "./app";
import "./utils/database.js";
import { PORT } from "./config.js";


app.listen(PORT, () => {
    console.log(`Servidor en el puerto de ejecucion http://localhost:${PORT}`);
})