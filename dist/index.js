"use strict";
/**
 * main entry
 * by kueiapp.com
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var setting_1 = __importDefault(require("./config/setting"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
// Express
var app = express_1.default();
// create application/x-www-form-urlencoded parser
app.use(express_1.default.static(path_1.default.join(__dirname, "./client")));
console.log(__dirname + ", ./client");
app.use(body_parser_1.default.urlencoded({ extended: false })); // false:string, true:all types
/** node.js main **/
app.listen(setting_1.default.config.port, function () {
    console.log("socket server is listening on ", setting_1.default.config.port);
});
//# sourceMappingURL=index.js.map