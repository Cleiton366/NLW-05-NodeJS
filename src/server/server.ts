import express, { request, response } from "express";
import "../database";
import {routes} from "./routes"

const app = express();

/**
 * GET = Buscas
 * POST = Criacao
 * PUT = Alteracao
 * DELETE = Deletar
 * PATCH = Alterar uma informacao especifica
 */

app.use(express.json());
app.use(routes);

app.listen(3666, () =>console.log("Server is up and running on port 3666"));