const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");

const app = express();

// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/freelance");
        console.log(`DB connected`);
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Exit process with failure
    }
};
connectDB();

// Setting up Handlebars
app.set('view engine', 'hbs');
app.set('views', 'views');
hbs.registerPartials("views/partials")

// Static Files
app.use("/static", express.static("public"));

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/hi", (req, res) => {
    res.render("gallery");
});

// Start the Server
app.listen(3000, () => {
    console.log(`Server connected at http://localhost:3000`);
});
