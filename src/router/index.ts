import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
	return res.render("index/index", req.session);
});

import projecthall from "./project_hall";
router.use("/projects", projecthall);

export default router;
