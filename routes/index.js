const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {            /* Landing or HomePage */

});

router.get("/posts", function(req, res, next){           /* display the lists of post in db */

});

router.post("/createposts", function (req, res) {       /* fill the posts requirements and stores in db */	

});

router.get("/createposts", function(req, res, next){        /* display the Createposts page */

});


module.exports = router;
