import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import compression from 'compression';
import config from "./config/app.config";
import apiRoute from "./routes/api.route";
import errorHandler, { ErrorInterface } from "./middleware/error.middleware";
import healthCheck from "./controllers/healthcheck.controller";

const app: Express = express();

const port = config.server.PORT;

// Compression Middleware 
app.use(compression());

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cross origin Middleware
app.use(cors());

// Health Check API
app.get("/healthcheck", healthCheck);

/** API V1 ROUTE */
app.use("/v1", apiRoute);

// Handle non exist url
app.use(async (req: Request, res: Response, next: NextFunction) => {
  let error: ErrorInterface = new Error("url not exist.");
  error.status = 404;
  next(error);
});

// Handle error exception
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at localhost:${port}`);
});
