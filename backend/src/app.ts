import express from "express";
import "dotenv/config";
import morgan from "morgan";
import { connectToDatabase } from "../database/database";
import routes from "./routes/index";
import { notFound } from "../middlewares/notFound";
import helmet from "helmet";

const app = express();
const port = process.env.PORT;
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
app.use("/api/v1", routes);

app.get("/", (req, res) => res.send("hello world"));
app.use(notFound);

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Express is listening at http://localhost:${port}`);
});
export default app;
