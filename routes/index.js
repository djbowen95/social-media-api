const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use((req, res) => res.send("Incorrect route provided."))

module.exports = router;
