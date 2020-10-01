const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", async (request, response) => {
	const blogs = await Blog.find({});
	response.json(blogs.map((blog) => blog.toJSON()));
});

blogsRouter.post("/", async (request, response, next) => {
	const blog = new Blog(request.body);

	if (blog.likes === undefined) {
		console.log(typeof blog);
		blog.likes = 0;
	}

	const savedBlog = await blog.save();
	response.json(savedBlog);
});

module.exports = blogsRouter;
