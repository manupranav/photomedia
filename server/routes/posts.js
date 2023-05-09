import { express } from "express";
import { getFeedPosts, hetUserPosts, likePost } from "../controller/posts.js";
import { getUser } from "../controller/users";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

router.patch("/:id/like".verifyToken, likePost);

export default router;
