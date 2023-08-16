import express from "express";

import { createTweet, deleteTweet, getTweet, updateTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/comment-controller.js";
import { signup, login } from "../../controllers/auth-controller.js";
import { authenticate } from "../../middlewares/authenticate.js";
const router = express.Router();

router.post("/tweets", createTweet);
router.get("/tweets/:id", getTweet);
router.delete("/tweets/:id",deleteTweet)
router.post("/likes/toggle", toggleLike);
router.put('/tweets/:id',updateTweet)
router.post("/comments", createComment);
router.post("/signup", signup);
router.post("/login", login);
export default router;
