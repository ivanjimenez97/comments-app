import request from "supertest";
import app from "../app.js"; // Import your Express app
import { Comment } from "../models/comment.model.js"; // Import the model

// Mock the Comment model
jest.mock("../models/comment.model.js");

describe("Comment API", () => {
  // Test for the GET /comments route
  describe("GET /comments", () => {
    it("should return a list of comments", async () => {
      // Mock the Comment.findAll() to return some test data
      Comment.findAll.mockResolvedValue([
        { id: 1, email: "test1@example.com", description: "Test comment 1" },
        { id: 2, email: "test2@example.com", description: "Test comment 2" },
      ]);

      const response = await request(app).get("/api/comments");

      expect(response.status).toBe(201); // Assert status is 201
      expect(response.body.records).toHaveLength(2); // Assert 2 records returned
      expect(response.body.records[0].email).toBe("test1@example.com");
    });
  });

  // Test for POST /comments route
  describe("POST /comments", () => {
    it("should create a new comment", async () => {
      const newComment = {
        id: 1,
        email: "test1@example.com",
        description: "New comment",
      };

      // Mock the Comment.create() to resolve with the new comment
      Comment.create.mockResolvedValue(newComment);

      const response = await request(app)
        .post("/api/comments")
        .send({ email: "test1@example.com", description: "New comment" });

      expect(response.status).toBe(201); // Assert that status is 201
      expect(response.body.data.email).toBe("test1@example.com");
      expect(response.body.message).toBe("Record created successfully.");
    });

    it("should fail when email is missing", async () => {
      const response = await request(app)
        .post("/api/comments")
        .send({ description: "New comment" });

      expect(response.status).toBe(500); // Assert that status is 500 for missing email
    });
  });

  // Test for DELETE /comments/:id route
  describe("DELETE /comments/:id", () => {
    it("should delete a comment", async () => {
      const comment = {
        id: 1,
        email: "test1@example.com",
        description: "Test comment",
      };

      // Mock the Comment.findByPk() and .destroy()
      Comment.findByPk.mockResolvedValue(comment);
      comment.destroy = jest.fn(); // Mock the destroy method

      const response = await request(app).delete("/api/comments/1");

      expect(response.status).toBe(200); // Status should be 200 for successful deletion
      expect(response.body.message).toBe("Record deleted successfully.");
    });

    it("should return 404 if comment not found", async () => {
      // Mock findByPk() to return null
      Comment.findByPk.mockResolvedValue(null);

      const response = await request(app).delete("/api/comments/999");

      expect(response.status).toBe(404); // Assert status is 404 for not found
      expect(response.body.message).toBe("Record not Found.");
    });
  });
});
