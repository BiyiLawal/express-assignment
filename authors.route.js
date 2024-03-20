const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("request from authors");
    console.log("authentication", req.headers["authentication"]);
    console.log("content-type", req.headers["content-type"]);
    next();
})

const lastLayerMiddleware = (req, res, next) => {
    console.log("last layer middleware");
    next();
};

router.get("/", lastLayerMiddleware, (req, res) => {
    res.json({ author: "J.K. Rowling", book: "Harry Potter" });
});

router.get("/:authorsId", (req, res) => {
    console.log(req.params);
    res.json({ author: "J.K. Rowling", book: "Harry Potter" });
});

router.post("/", (req, res) => {
    res.json({ message: "Author created", authors: req.body })
});

router.put("/:authorsId", (req, res) => {
    res.json({ message: "Author updated", authors: req.body })
});

router.patch("/:authorsId", (req, res) => {
    res.json({ message: "Author edited", authors: req.body })
});

router.delete("/:authorsId", (req, res) => {
    res.json({ message: "Author deleted", authors: req.body })
});

module.exports = router;

