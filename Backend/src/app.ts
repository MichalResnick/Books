
import express from "express"
import appConfig from "./2-utils/app-config"
import controller from "./6-controller/controller";
import dal from "./2-utils/dal";

dal.connect();

const server=express()

server.use(express.json());
server.use("/api", controller);

server.listen(appConfig.port, ()=>console.log(`listening to http/localhost ${appConfig.port}`))
