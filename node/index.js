const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, "public")));

// Serve the index.html file when accessing the root URL
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

const dataMSG = [
	{
		time: "2023-01-01",
		open: 150.58,
		high: 154.58,
		low: 140.58,
		close: 151.58,
	},
	// Add more data here
];

// WebSocket server logic
wss.on("connection", (ws) => {
	console.log("Client connected");

	// Create a loop to send data to the client at regular intervals
	const sendDataInterval = setInterval(() => {
		// Sending data from the dataMSG array
		ws.send(JSON.stringify({ data: dataMSG }));
	}, 1000); // Send data every 1 second

	// Handle messages from clients
	ws.on("message", (message) => {
		console.log(`Received: ${message}`);
		// You can handle client messages here if needed.
	});

	// Handle disconnection
	ws.on("close", () => {
		console.log("Client disconnected");
		clearInterval(sendDataInterval); // Stop sending data when the client disconnects
	});
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`Server is listening http://localhost:${PORT}`);
});
