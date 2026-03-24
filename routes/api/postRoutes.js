
const router = require("express").Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require("../../controllers/postController");
const { authMiddleWare } = require("../../utils/auth");

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", authMiddleWare, createPost);
router.put("/:id", authMiddleWare, updatePost);
router.delete("/:id", authMiddleWare, deletePost);

module.exports = router;

