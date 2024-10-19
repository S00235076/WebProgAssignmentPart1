"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradesCollection = exports.usersCollection = void 0;
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connectionString = process.env.DB_CONN_STRING || "";
const dbName = process.env.DB_NAME || "WS4";
const client = new mongodb_1.MongoClient(connectionString);
let db;
client.connect().then(() => {
    db = client.db(dbName);
    exports.usersCollection = db.collection('users');
    exports.gradesCollection = db.collection('grades');
    console.log('Connected to database');
})
    .catch((error) => {
    if (error instanceof Error) {
        console.log(`issue with db connection ${error.message}`);
    }
    else {
        console.log(`error with ${error}`);
    }
});
