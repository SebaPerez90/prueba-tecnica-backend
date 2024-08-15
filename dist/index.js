"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const conectionDB_1 = __importDefault(require("./database/config/conectionDB"));
const PORT = process.env.PORT || 3000;
(0, conectionDB_1.default)()
    .then(() => app_1.default.listen(PORT, () => { }))
    // eslint-disable-next-line no-console
    .catch((error) => console.error(error));
