// setup express app
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
	console.log("server is running on port", PORT);
});

// serve frontend
app.use(express.static("client/dist"));

// list of users who are logged in
let users: user[] = [];

// setup socket.io
import { Server } from "socket.io";
const io = new Server<
	ClientToServerEvents,
	ServerToClientEvents,
	InterServerEvents,
	SocketData
>(server);

// handle socket events
io.on("connection", (socket) => {
	// handle login
	socket.on("login", (name) => {
		socket.data.name = name;

		socket.emit("message", {
			author: "",
			text: `Welcome, ${name}!`,
			bot: true,
		});

		io.emit("message", {
			author: "",
			text: `👋 ${name} has entered the chat`,
			bot: true,
		});

		users.push({ id: socket.id, name: name });

		io.emit("users", users);
	});

	// forward messages
	socket.on("message", (message) => {
		io.emit("message", { ...message, bot: false });
	});

	// handle logout
	socket.on("disconnect", () => {
		users = users.filter((user) => user.id != socket.id);
		io.emit("users", users);
		if (socket.data.name) {
			io.emit("message", {
				author: "",
				text: `🏃‍♀️ ${socket.data.name} has left the chat`,
				bot: true,
			});
		}
	});
});
