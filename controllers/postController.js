const { Post, User, Category } = require("../models");

const {authMiddleWare} = require('../utils/auth');

// GET /api/posts - Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, attributes: ["id", "userName"] },
        { model: Category, as: "categories", attributes: ["id", "category_name"] },
      ],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get posts", error: err.message });
  }
};

// GET /api/posts/:id - Get post by id
const getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["id", "userName"] },
        { model: Category, as: "categories", attributes: ["id", "category_name"] },
      ],
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to get post", error: err.message });
  }
};

// POST /api/posts - Create a post
const createPost = async (req, res) => {
  try {
    const { title, content, postedBy, userId, categoryIds } = req.body;

    const newPost = await Post.create({ title, content, postedBy: req.user.userName, userId: req.user.id });

    if (categoryIds && categoryIds.length) {
      await newPost.addCategories(categoryIds);
      console.log("categories added: ", categoryIds);
    }

    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create post", error: err.message });
  }
};

// PUT /api/posts/:id - Update a post
const updatePost = async (req, res) => {
  try {
    const { title, content, postedBy, categoryIds } = req.body;

    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== req.user.id) {
      return res.status(403).json({message: 'Unauthorized'});
    }

    await post.update({ title, content, postedBy });

    if (categoryIds) {
      await post.setCategories(categoryIds);
    }

    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update post", error: err.message });
  }
};

// DELETE /api/posts/:id - Delete a post
const deletePost = async (req, res) => {
  try {
    const deleted = await Post.destroy({ where: { id: req.params.id } });

    if (!deleted) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== req.user.id) {
      return res.status(403).json({message: 'Unauthorized'});
    }

    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete post", error: err.message });
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };

