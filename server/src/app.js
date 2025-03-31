import express from "express";
import cors from "cors";

// app route
import productRoute from "./routes/product.route.js";
import cartRoute from "./routes/cart.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./utils/errorHandler.js";
import { logDetails } from "./middlewares/logDetails.middleware.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //to ensure valid URLs and data are passed between web applications and the server
app.use(cookieParser());
app.use(logDetails);

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);

// Global error handler
app.use(errorHandler);

export { app };
