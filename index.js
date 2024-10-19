"use strict";
/* external imports */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
/* internal imports */
const users_1 = __importDefault(require("./routes/users"));
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.json());
//app.use(authenticateKey); - all the routes below
app.get("/ping", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message: "hello from Oran ",
    });
}));
app.get('/bananas', (_req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.send('hello world, this is bananas - ha ha ha ha ha ha '); }));
app.use('/api/v1/users', users_1.default);
//usersCollection.updateOne(query, {$set : newData});
app.listen(PORT, () => {
    console.log("Server is running on port  --", PORT);
});
