import request from "supertest";
import { expect } from "chai";

import createDefaultServer from "server";
const app = createDefaultServer();

describe("server checks", function () {
    it("server is created without error", function (done) {
        // done function is used in the case of async function
        request(app).get("/").expect("hello world", done);
    });
});
