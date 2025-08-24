import { Router } from "express";
import {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.controllers.js";

const router = Router();

router.route("/").get(getAllNotes).post(createNote);

router.route("/:id").get(getSingleNote).put(updateNote).delete(deleteNote);

export default router;
