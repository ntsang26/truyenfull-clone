const mongoose = require("mongoose")

const connect = () => {
	mongoose
		.connect(
			"mongodb+srv://bogdev:iywDKj6mHWSy1pIh@bogdev-cloud.eg6vckx.mongodb.net/truyenfull-clone?retryWrites=true&w=majority",
		)
		.then(() => {
			console.log("MongoDB connected")
		})
		.catch((err) => {
			console.log("failed", err)
		})
}

module.exports = { connect }
