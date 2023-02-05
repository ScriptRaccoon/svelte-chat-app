import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log("server is running on port", PORT);
});

app.get("/question", (req, res) => {
	console.log("request on server");
	res.status(200).send("42");
});

app.use(express.static("client/dist"));
