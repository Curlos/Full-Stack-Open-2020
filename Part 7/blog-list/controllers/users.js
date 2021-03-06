const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
	const users = await User.find({}).populate("blogs", {
		url: 1,
		title: 1,
		author: 1,
	});
	response.json(users);
});

usersRouter.post("/", async (request, response, next) => {
	const body = request.body;

	const saltRounds = 10;
	console.log(body.password);

	if (body.password.length < 3) {
		throw {
			name: "MongoError",
			message: "Password length must be at least 3 characters long",
		};
	}

	const passwordHash = await bcrypt.hash(body.password, saltRounds);

	const user = new User({
		username: body.username,
		name: body.name,
		passwordHash,
	});

	const savedUser = await user.save();

	response.json(savedUser);
});

module.exports = usersRouter;
