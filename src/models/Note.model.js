import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      cast: false,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
      cast: false,
    },
  },
  { timestamps: true }
);
const Note = mongoose.model("Note", noteSchema);

export default Note;
