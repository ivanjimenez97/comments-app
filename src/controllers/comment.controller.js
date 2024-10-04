import { Comment } from "../models/comment.model.js";

const CommentController = {
  index: async (req, res) => {
    console.log(req.query.search);
    try {
      const comments = await Comment.findAll();

      res.status(201).json({
        records: comments,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An Error occured when trying to get the data.",
        error: error,
      });
    }
  },

  show: async (req, res) => {
    try {
      const { id } = req.params;

      const record = await Comment.findByPk(id);

      if (!record) {
        return res.status(404).json({ message: "Record not Found." });
      }

      res.json({
        record: record,
      });
    } catch (error) {
      return res.status(500).json({
        message: "An Error occurred when trying to get the record.",
        error: error,
      });
    }
  },

  store: async (req, res) => {
    // Logic to create a new Comment
    try {
      const { email, description } = req.body;

      if (!email) {
        return res.status(500).json({ message: "Email is required." });
      }

      if (!description) {
        return res.status(500).json({ message: "Description is required." });
      }

      const record = await Comment.create({
        email: email,
        description: description,
      });

      res.status(201).json({
        data: record,
        message: "Record created successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "An Error occured when trying to create the record.",
        error: error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;

      const { email, description } = req.body;

      const record = await Comment.findByPk(id);
      if (!record) {
        return res.status(404).json({ message: "Record not Found." });
      }

      await record.update({
        email: email,
        description: description,
      });

      res.status(201).json({
        record: record,
        message: "Record updated successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "An Error occurred when trying to update the record.",
        error: error,
      });
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;

      const record = await Comment.findByPk(id);

      if (!record) {
        return res.status(404).json({ message: "Record not Found." });
      }

      await record.destroy();

      res.json({
        message: "Record deleted successfully.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "An error occurred when trying to delete the record.",
        error: error,
      });
    }
  },
};

export default CommentController;
