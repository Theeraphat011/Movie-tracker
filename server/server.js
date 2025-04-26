const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));

app.listen(9000, () => {
	console.log("server is running http://localhost:9000/");
});
