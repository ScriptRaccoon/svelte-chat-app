var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log("server is running on port", PORT);
});
app.use(express.static("client/dist"));
let users = [];
import { Server } from "socket.io";
const io = new Server(server);
io.on("connection", (socket) => {
    socket.on("name", (name) => __awaiter(void 0, void 0, void 0, function* () {
        socket.data.name = name;
        io.emit("message", {
            author: "",
            text: `👋 ${name} has entered the chat`,
            bot: true,
        });
        users.push({ id: socket.id, name: name });
        io.emit("users", users);
    }));
    socket.on("message", (message) => {
        io.emit("message", Object.assign(Object.assign({}, message), { bot: false }));
    });
    socket.on("disconnect", () => {
        users = users.filter((user) => user.id != socket.id);
        io.emit("users", users);
        io.emit("message", {
            author: "",
            text: `🏃‍♀️ ${socket.data.name} has left the chat`,
            bot: true,
        });
    });
});
