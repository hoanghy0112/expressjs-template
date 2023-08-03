const express = require("express");
const app = express();
const port = 3000;

// Edit here...

app.get("/in-hoa", (req, res) => {
	const query = req.query;
	const queryString = query.string;
	res.status(200).send(queryString.toUpperCase());
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
