import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
	return res.render("project_hall/project_hall", req.session);
});

export default router;
