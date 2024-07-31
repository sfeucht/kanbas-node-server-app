import express from 'express'; 
import mongoose from 'mongoose'; 
import dotenv from 'dotenv'; 
dotenv.config({ path: '.env' });

import cors from "cors";
import Hello from "./Hello.js"; 
import Lab5 from "./Lab5/index.js"; 
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from './Kanbas/Modules/routes.js';
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
import UserRoutes from "./Users/routes.js";

// connect to mongodb 
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING //|| "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);
console.log(CONNECTION_STRING); 

const app = express();
app.use(cors()); 
app.use(express.json()); 
UserRoutes(app); 
AssignmentRoutes(app);
CourseRoutes(app); 
ModuleRoutes(app); 
Lab5(app); 
Hello(app);
app.listen(process.env.PORT || 4000)