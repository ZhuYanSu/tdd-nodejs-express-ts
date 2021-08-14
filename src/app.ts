import "dotenv/config";
import createDefaultServer from "server";

function startServer() {
    const app = createDefaultServer();
    // cast type
    const port: number = parseInt(<string>process.env.PORT, 10) || 4000;
    app.listen(port, () => {
        console.log(`[*] server is running on port ${port}`);
    });
}

startServer();
