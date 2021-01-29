const express = require("express");
const router = express.Router();
const Post = require("../models/post");

/* GET home page. */
router.get("/", function (req, res, next) {            /* Landing or HomePage */

});

router.get("/posts", function(req, res, next){           /* display the lists of post in db */

});

<<<<<<< HEAD
/* create post */
router.post("/post", function (req, res) {
	var got = {
		given_name: req.body.username,
		given_location: req.body.location,
	};
	/*console.log(got,req.body)*/
	var Details = new Post({
		username: got.given_name,
		location: got.given_location,
	});
	Details.save();
	res.redirect("/posts");
});

/* getiing post from db */
router.get("/posts", function (req, res) {
	Post.find()
		.then((result) => {
			res.status(200).json({
				postData: result,
			});
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ error: err });
		});
});

=======
router.post("/createposts", function (req, res) {       /* fill the posts requirements and stores in db */	

});

router.get("/createposts", function(req, res, next){        /* display the Createposts page */

});


>>>>>>> 9a613ccb9d5a7f8d4cd2ecbab3bc93d08b87575c
module.exports = router;
