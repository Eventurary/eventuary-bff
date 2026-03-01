import Koa from "koa";
import bodyParser from "koa-bodyparser";
import healthRouter from "./routes/health";

const app = new Koa();

// Middleware
app.use(bodyParser());

// Routes
app.use(healthRouter.routes());
app.use(healthRouter.allowedMethods());

export default app;
