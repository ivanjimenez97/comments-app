import { Router } from "express";

const router = Router();

import CommentController from "../controllers/comment.controller.js";

//Get All Records
router.get("/comments", CommentController.index);

// Creating a new Record
router.post("/comments", CommentController.store);

//Get an Specific Record
router.get("/comments/:id", CommentController.show);

//Update a Record
router.patch("/comments/:id", CommentController.update);

//Delete a Record
router.delete("/comments/:id", CommentController.destroy);

export default router;
