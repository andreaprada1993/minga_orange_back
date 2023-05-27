import express from "express";
import "dotenv/config.js";
import "./config/database.js";
import indexRouter from "./router/index.js";
import cors from 'cors'
import morgan from 'morgan'


const server = express(); //crea servidor
const PORT = process.env.PORT || 8080; //definir el puerto
const ready = () => console.log("server ready: " + PORT);
 
//middleware
server.use(express.json()); //permite entradas y tambien trabajar con formato json
server.use(express.urlencoded({ extended: true })); // permite capturar consultas 
server.use(cors())  
server.use(morgan('dev'))

//router
server.use('/api' ,indexRouter)

server.listen(PORT, ready); 