const router = require("express").Router();
const cubeService = require("../services/cubeService");

router.get("/create", (req, res) => {
    res.render("create");
});

router.post("/create", async (req, res) => {
    const cube = req.body;

    //Validate the
    if (cube.name.length < 2) {
        return res.status(400).send("Invalid request");
    }

    //Save Data
    try {
        await cubeService.save(cube)
        res.redirect("/");
    } catch (error) {
        res.status(400).send(error);
    }

});

router.get('/details/:id', (req, res) => {
    res.render('details');
})

module.exports = router;
