import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/router.js";
//import { users, posts } from './mockData/mockData.js';
//import User from "./models/User.js";
//import Post from "./models/Post.js";

//configuration
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/public/assets", express.static(path.join(__dirname, "public/assets")));

app.use('/api', router);

//database and server setup
const PORT = process.env.PORT || 6001;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Connected to database`);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    //insert mock data
    //User.insertMany(users);
    //Post.insertMany(posts);
  })
