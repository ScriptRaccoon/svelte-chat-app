import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
	console.log("server is running on port", PORT);
});

app.use(express.static("client/dist"));

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
	socket.emit("message", `Welcome, ${socket.id}!`);
	socket.on("message", (msg) => {
		io.emit("message", msg);
	});
});
