// Imports
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
import path from "path";

// Setup
const app = express();
dotenv.config();

// Cookies/session
app.set("trust proxy", 1);
app.use(
	session({
		secret: "1234ritro_secure!#$",
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: true, // true if https (not http)
		},
	})
);

// Initializing body-parser for request body parsing
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);

// Setting up the views/pug rendering engine
app.use(express.static(path.join(__dirname, "../assets")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

// Router
import router from "./router/index";
app.use("/", router);

// Middleware
import error from "./middleware/error";
app.use(error);

// Start server
const port = process.env.PORT || 1337;
app.listen(port);
