import { isValidObjectId } from "mongoose";
import Note from "../models/Note.model.js";
import AppError from "../utils/AppError.js";

export const getAllNotes = async (_, res, next) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getSingleNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new AppError("invalid id", 400);
    }
    const note = await Note.findById(id);
    if (!note) {
      throw new AppError("note not found", 404);
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const createNote = async (req, res, next) => {
  try {
    if (!req.body?.title || !req.body?.content) {
      throw new AppError("title and content are required", 400);
    }

    const newNote = new Note({
      title: req.body?.title,
      content: req.body?.content,
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new AppError("invalid id", 400);
    }
    const updatedNote = req.body;
    const note = await Note.findById(id);
    if (!note) {
      throw new AppError("note not found", 404);
    }
    note.title =
      updatedNote.title === undefined ? note.title : updatedNote.title;
    note.content =
      updatedNote.content === undefined ? note.content : updatedNote.content;
    await note.save();
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isValidObjectId(id)) {
      throw new AppError("invalid id", 400);
    }
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      throw new AppError("note not found", 404);
    }
    res.status(200).json({ message: `Note deleted successfully` });
  } catch (error) {
    next(error);
  }
};
