const mongoose = require("mongoose")

const connect = () => {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => {
			console.log("MongoDB connected")
		})
		.catch((err) => {
			console.log("failed", err)
		})
}

module.exports = { connect }
