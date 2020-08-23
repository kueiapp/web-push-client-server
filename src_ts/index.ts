/**
 * main entry of express server
 * by kueiapp.com
 */

import setting from "./config/setting";
import express, { Application } from "express";
import bodyParser from "body-parser";
import path from "path";

// Express
const app: Application = express();

// create application/x-www-form-urlencoded parser
app.use(express.static(path.join(__dirname, "./client")));
console.log(`${__dirname}, ./client`);

app.use(bodyParser.urlencoded({ extended: false })); // false:string, true:all types

/** node.js main **/
app.listen(setting.config.port, () => {
	console.log("socket server is listening on ", setting.config.port);
});
