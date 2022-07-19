import express from 'express';
import * as ControllerComment from '../controllers/comment.js';
import { verifyToken } from '../verifytoken.js';

const router = express.Router();

router.post("/add", verifyToken, ControllerComment.addComment);
router.delete("/delete/:id", verifyToken, ControllerComment.deleteComment);
router.get("/get/:videoId", verifyToken, ControllerComment.getComment);

export default router;