import express from 'express';
import * as ContollerUser from '../controllers/user.js';
import { verifyToken } from '../verifytoken.js';

const router = express.Router();

//update user
router.put("/update/:id", verifyToken, ContollerUser.updateUser)

//delete user
router.delete("/delete/:id", verifyToken, ContollerUser.deleteUser)

//get user
router.get("/get/:id", ContollerUser.getUser)

//subscribe a user
router.put("/sub/:id", verifyToken, ContollerUser.subscribe)

//unsubscribe a user
router.put("/unsub/:id", verifyToken, ContollerUser.unsubscribe)

//like a video
router.put("/like/:videoId", verifyToken, ContollerUser.like)

//dislike a video
router.put("/dislike/:videoId", verifyToken, ContollerUser.dislike)

export default router;