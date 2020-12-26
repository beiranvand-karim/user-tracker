const express = require("express")
const path = require("path")
const fs = require("fs")
const compression = require("compression")
const bodyParser = require("body-parser")

require("dotenv").config()

const app = express()

app.use(compression())

const PORT = parseInt(process.env["PORT"] || 3000, 10)

app.use(bodyParser.json())
app.use(bodyParser.text())

app.use(express.static(path.join(__dirname, "../../build")))

app.get("*", (req, res) => {
	const f = fs.readFileSync(
		path.join(__dirname, "../../build", "index.html"),
		"utf8"
	)
	res.set("text/html").send(f)
})

app.listen(PORT, (err) => {
	if (err) throw err
	console.log(`> Ready on http://localhost:${PORT}`) // eslint-disable-line no-console
})
