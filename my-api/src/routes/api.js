const express = require('express');
const HelloController = require("../controllers/HelloController");

const router = express.Router();


//this is my first routing
router.get("/hello-get",HelloController.Hello);
router.post("/hello-post",HelloController.Hello);

module.exports = router;