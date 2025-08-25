import Server from "./server/config.js";
import routes from "./src/routes/index.routes.js"; // archivo que junta todas las rutas

const server = new Server();
server.app.use("/api", routes);
server.listen();
/*
import Server from "./server/config.js";
import routes from "./src/routes/index.routes.js";

const server = new Server();
server.app.use("/api", routes);

// ❌ NO usamos listen
// ✅ Exportamos la app para que Vercel la ejecute como función serverless
export default server.app;
*/