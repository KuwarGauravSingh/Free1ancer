const express = require("express")
const router = express.Router();
const Detail= require("../models/Detail")

router.get("/", async (req,res)=>{
    const details = await Detail.findOne({"_id":"673a190f5dd0626b0e72c8e5"})
    //console.log(details)
    res.render("index",{details:details})
})

router.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({"_id":"673a190f5dd0626b0e72c8e5"})
    res.render("gallery",{details:details});
  });

  module.exports=router;