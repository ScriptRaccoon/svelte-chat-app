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
	socket.on("login", async (name) => {
		socket.data.name = name;

		io.emit("message", {
			author: "",
			text: `👋 ${name} has entered the chat`,
			bot: true,
		});

		// TESTING ONLY
		for (let i = 0; i < 20; i++) {
			users.push({ id: socket.id, name: name });
		}
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
		io.emit("message", {
			author: "",
			text: `🏃‍♀️ ${socket.data.name} has left the chat`,
			bot: true,
		});
	});
});
