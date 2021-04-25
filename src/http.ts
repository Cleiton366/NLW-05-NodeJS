import express, { request, response } from "express";
import "./database";
import { routes } from "./server/routes"
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../", "public")));
app.set("views", path.join(__dirname, "../", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
    return response.render("html/client.html")
})

app.get("/pages/admin", (request, response) => {
    return response.render("html/admin.html")
})

const http = createServer(app); //http protocole 
const io = new Server(http); //WebSocket protocole

io.on("connection", (socket: Socket) => {
    //console.log("Se conectou", socket.id);
});

/**
 * GET = Buscas
 * POST = Criacao
 * PUT = Alteracao
 * DELETE = Deletar
 * PATCH = Alterar uma informacao especifica
 */

app.use(express.json());
app.use(routes);


export { http, io }