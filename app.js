const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Detail = require("./models/Detail");
const slider = require("./models/Slider");
const router = require("./routes/Main");
const Service=require("./models/service")
const app = express();

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/freelance");
    console.log(`DB connected`);

  //   Service.create([
  //     {
  //   icon:"fa-solid fa-user-secret",
  //   title:"course do",
  //   description:"course ekdam mst hai chauchakkk",
  //   linkText:"http://learnwithroshan",
  //   link:"check"
  //   },
  //   {
  //     icon:"fa-solid fa-user-secret",
  //     title:"course le loo",
  //     description:"course ekdam tagdaa hai chauchakkk",
  //     linkText:"http://learnwithroshan",
  //     link:"learn"
  //     },
  //     {
  //       icon:"fa-solid fa-user-secret",
  //       title:"padhaii le loo",
  //       description:"padhoo ekdam tagdaa hai chauchakkk",
  //       linkText:"http://learnwithroshan",
  //       link:"sikhoo"
  //       },
  // ])

    //slider data created
//     await slider.create([{
//       title:"learn kroo",
//       subTitle:"mann lagake karo",
//       imageUrl:"/static/images/images.jpeg"
//     },
//     {
//       title:"cahchaa kroo",
//       subTitle:"cahcha lagake karo",
//       imageUrl:"/static/images/images.jpeg"
//     },
//     {
//       title:"bachii kroo",
//       subTitle:"bachii lagake karo",
//       imageUrl:"/static/images/images.jpeg"
//     }
// ]);

    // Check if data already exists
    const existingDetail = await Detail.findOne({ brandName: "It solution" });
    if (!existingDetail) {
      await Detail.create({
        brandName: "It solution",
        brandIconUrl:
          "https://imgs.search.brave.com/VgZUkKkLq4OZzDPglp8C_5aJ_hCaCtH6I-GoxYCqhM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHVic3BvdC5jb20v/aHMtZnMvaHViZnMv/cGFydHMtdXJsXzEu/d2VicD93aWR0aD01/OTUmaGVpZ2h0PTQw/MCZuYW1lPXBhcnRz/LXVybF8xLndlYnA",
        links: [
          { label: "Home", url: "/" },
          { label: "Services", url: "/services" },
          { label: "Gallery", url: "/gallery" },
          { label: "About", url: "/about" },
          { label: "Contact-Us", url: "/contact-us" },
        ],
      });
      console.log("Default data created");
    } else {
      console.log("Default data already exists");
    }
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Setting up Handlebars
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// Static Files
app.use("/static", express.static("public"));

app.use("/api/v1", router);

// Start the Server
app.listen(3000, () => {
  console.log(`Server connected at http://localhost:3000`);
});
