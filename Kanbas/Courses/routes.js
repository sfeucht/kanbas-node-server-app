// import Database from "../Database/index.js";
import * as dao from "./dao.js"; 

export default function CourseRoutes(app) {
  const updateCourse = async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const status = await dao.updateCourse(id, course); 
    // Database.courses = Database.courses.map((c) =>
    //   c._id === id ? { ...c, ...course } : c
    // );
    // res.sendStatus(204);
    res.json(status); 
  }

  const addCourse = async (req, res) => {
    const course = { ...req.body, 
      _id: new Date().getTime().toString() };
    // Database.courses.push(course);
    // res.send(course);
    console.log("adding course"); 
    const status = await dao.createCourse(course); 
    res.json(status); 
  }

  const getCourses = async (req, res) => {
    // const courses = Database.courses;
    const courses = await dao.findAllCourses(); 
    res.json(courses);
  }

  const deleteCourse = async (req, res) => {
    const { id } = req.params;
    // Database.courses = Database.courses.filter((c) => c.m !== id);
    // res.sendStatus(204);
    const result = await dao.deleteCourse(id); 
    res.json(result); 
  }

  app.put("/api/courses/:id", updateCourse); 
  app.post("/api/courses", addCourse);
  app.get("/api/courses", getCourses);
  app.delete("/api/courses/:id", deleteCourse);
  
}

