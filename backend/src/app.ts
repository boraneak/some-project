import express from "express";
import "dotenv/config";
import morgan from "morgan";
import { connectToDatabase } from "../utils/database";
import routes from "./routes/index";
const app = express();
const port = process.env.PORT;
app.use(morgan("dev"));
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => res.send("hello world"));

app.listen(port, async () => {
  await connectToDatabase();
  return console.log(`Express is listening at http://localhost:${port}`);
});
