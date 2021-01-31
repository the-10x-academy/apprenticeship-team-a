const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		default: Date.now,
	},
});
//collection creation
// const Post = new mongoose.model("Post",postSchema);
module.exports = mongoose.model("Post", postSchema);
