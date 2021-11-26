const express = require("express");
const router = express.Router();
const fs =require("fs");
// const router = fs.Router();

const coursesdata=require("../controller/app.js")

router.get("/",coursesdata.findAll);

router.post("/",coursesdata.create);

router.get("/:id",coursesdata.get);

router.put("/:id",coursesdata.update);

router.delete("/:id",coursesdata.delete);

module.exports = router;

