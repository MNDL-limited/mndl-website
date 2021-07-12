import express from "express";
const router = express.Router();

router.use(
	(req: express.Request, res: express.Response, next: express.NextFunction) => {
		interface ErrorWithStatus extends Error {
			status: number;
		}
		const err = new Error("Not Found") as ErrorWithStatus;
		err.status = 404;
		return next(err);
	}
);

router.use(
	(
		err: any,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		res.status(err.status || 500);
		return res.render("error", err);
	}
);

export default router;
