import { Router, Response, Request } from "express";

/**
 * @route: GET /auth
 * @description: Authenticate a user
 * @access: PUBLIC
 */
const router = Router();
// base route of auth route
router.get("/", (req: Request, res: Response) => {
    res.send("GET /auth");
});

export default router;
