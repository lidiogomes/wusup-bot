import  express from "express";
import * as dotenv from "dotenv";

//Conifig do dotenv
dotenv.config();

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Iniciando servidor
const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
}); 
