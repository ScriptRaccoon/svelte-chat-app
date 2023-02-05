import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
	console.log("server is running on port", PORT);
});

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
	console.log("got connection with", socket.id);
	socket.emit("message", "Hi from server!");
	socket.on("disconnect", () => {
		console.log("lost connection with", socket.id);
	});
});

app.get("/question", (req, res) => {
	console.log("request on server");
	res.status(200).send("42");
});

app.use(express.static("client/dist"));
