const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here
router.get("/", async (req, res, next) => {
   try {
    const allCelebrities = await Celebrity.find()
     res.render("celebrities/celebrities", { allCelebrities });
     
  } catch (error) {
    next(error)
  }
});

router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
  } catch (error) {
    next(error);
  }
});

module.exports = router;