const express = require("express");
const router = express.Router();
const Post=require("../models/post");

   

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

/* create post */
router.post("/createposts", function (req, res) {
	var got = {
		given_name : req.body.username,
		given_location : req.body.location,
	};
	/*console.log(got,req.body)*/
	var Details = new Post({
		username : got.given_name,
		location: got.given_location,
	});
	Details.save();
	res.redirect("/dummyposts")
});

/* getiing post from db */
router.get("/dummyposts", function(req, res){
	Post.find()
	.then(result=>{
		res.status(200).json({
			postData:result
		});
		console.log(result);
	})
	.catch(err=>{
		console.log(err);
		res.status(500).json({error:err});
	})
})

module.exports = router;
