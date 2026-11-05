import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "./server";

describe("API Routes Tests", () => {

  it("GET /courses should return all courses", async () => {
    const response = await request(app).get("/courses");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
    expect(response.body[0].name).toBe("Web Development");
  });

  it("POST /enrolments should enrol a student successfully", async () => {
    const response = await request(app)
      .post("/enrolments")
      .send({
        studentName: "Lujain",
        courseId: 1
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Enrolment successful!");
    expect(response.body.studentName).toBe("Lujain");
  });

  it("POST /enrolments should reject missing information", async () => {
    const response = await request(app)
      .post("/enrolments")
      .send({
        studentName: "Lujain"
      });

    expect(response.status).toBe(400);
  });

  it("POST /enrolments should reject an invalid course", async () => {
    const response = await request(app)
      .post("/enrolments")
      .send({
        studentName: "Lujain",
        courseId: 999
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Course not found");
  });

});