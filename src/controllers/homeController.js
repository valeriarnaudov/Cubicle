const cubeService = require("../services/cubeService");
const router = require("express").Router();

router.get("/", (req, res) => {
    let { search, from, to} = req.query;

    const cubes = cubeService.getAll(search, from, to);
    res.render("index", { cubes });
});

router.get("/about", (req, res) => {
    res.render("about");
});



module.exports = router;
