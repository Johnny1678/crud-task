import app from "./app";
import "./database.js";


app.listen(4000, () => {
    console.log(`Servidor en el puerto de ejecucion http://localhost:4000`);
})