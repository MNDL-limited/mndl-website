// Imports
import express from "express";
import fs from "fs-extra";
import bodyParser from "body-parser";
import session from "express-session";
import path from "path";
import pug from "pug";

// Creating a new express instance
const app = express();

// Cookies/session
app.set("trust proxy", 1); // trust first proxy
app.use(
	session({
		secret: "1234ritro_secure!#$",
		resave: false,
		saveUninitialized: true,
		cookie: {
			secure: true, // true if httpS
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

// // Catch 404 and forward to error handler
// app.use(function (req, res, next) {
// 	var err = new Error("Not Found");
// 	res.send(err); // If there would ever be a visual UI, this would be a custom page and res.render();
// 	return next(err);
// });

// Router
import router from "./router/index";
app.use(router);

// Start server
const port = process.env.PORT || 1337;
app.listen(port);
