import "reflect-metadata";
import { createConnection } from "typeorm";
import { config, dbConfig } from "./config";
import { app } from "./http/app";
import { HTTPServer } from "./http/server";

const httpServer = new HTTPServer(app);
httpServer.connectDb(createConnection, dbConfig);

httpServer.start(config.port);
