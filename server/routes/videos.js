import express from 'express';
import * as ControllerVideo from '../controllers/video.js';
import { verifyToken } from '../verifytoken.js';

const router = express.Router();

//create a video
router.post("/add", verifyToken, ControllerVideo.addVideo);
router.put("/update/:id", verifyToken, ControllerVideo.updateVideo);
router.delete("/delete/:id", verifyToken, ControllerVideo.deleteVideo);
router.get("/get/:id", ControllerVideo.getVideo);
router.put("/view/:id", ControllerVideo.addView);
router.get("/trend", ControllerVideo.trend);
router.get("/random", ControllerVideo.random);
router.get("/sub", verifyToken, ControllerVideo.sub);
router.get("/tags", ControllerVideo.getByTag);
router.get("/search", ControllerVideo.search);

export default router;