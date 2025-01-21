const express = require("express")
const router = express.Router();
const Detail= require("../models/Detail")
const Sliders= require("../models/Slider")
const Services=require("../models/service")


router.get("/", async (req,res)=>{
    const details = await Detail.findOne({"_id":"673a190f5dd0626b0e72c8e5"})
    const slides = await Sliders.find()
    const services = await Services.find()
    //console.log(services)
    res.render("index",{details:details,slides:slides,services:services})
})

router.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({"_id":"673a190f5dd0626b0e72c8e5"})
    res.render("gallery",{details:details});
  });

  module.exports=router;
