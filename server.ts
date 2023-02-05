import express from "express";
import type {
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData,
	user,
} from "./client/src/types";
const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
	console.log("server is running on port", PORT);
});

app.use(express.static("client/dist"));

let users: user[] = [];

import { Server } from "socket.io";
const io = new Server<
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData
>(server);

io.on("connection", (socket) => {
	socket.on("name", async (name) => {
		socket.data.name = name;

		io.emit("message", {
			author: "",
			text: `👋 ${name} has entered the chat`,
			bot: true,
		});

		users.push({ id: socket.id, name: name });
		io.emit("users", users);
	});

	socket.on("message", (message) => {
		io.emit("message", { ...message, bot: false });
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
