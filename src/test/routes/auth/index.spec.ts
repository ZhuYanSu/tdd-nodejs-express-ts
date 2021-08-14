import request from "supertest";
import { expect } from "chai";
import createDefaultServer from "server";

const app = createDefaultServer();

describe("auth routes", function () {
    it("/auth respond with 'GET /auth'", function (done) {
        request(app).get("/auth").expect("GET /auth", done);
    });
});
