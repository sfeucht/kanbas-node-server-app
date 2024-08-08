// import Database from "../Database/index.js";
import * as dao from "./dao.js"; 

export default function QuizRoutes(app) {
  const updateQuiz = async (req, res) => {
    const { id } = req.params;
    const quiz = req.body;
    const status = await dao.updateQuiz(id, quiz); 
    res.json(status); 
  }

  const addQuiz = async (req, res) => {
    const quiz = { ...req.body, 
      _id: new Date().getTime().toString() };
    const status = await dao.createQuiz(quiz); 
    res.json(status); 
  }

  const getQuizzes = async (req, res) => {
    const quizzes = await dao.findAllQuizzes(); 
    res.json(quizzes);
  }

  const getQuizzesForCourse = async (req, res) => {
    const { cid } = req.params; 
    const quizzes = await dao.findAllQuizzes(); 
    const filtered = quizzes.filter((q) => q.courseId.equals(cid))
    res.json(filtered);
  }

  const deleteQuiz = async (req, res) => {
    const { id } = req.params;
    const result = await dao.deleteQuiz(id); 
    res.json(result); 
  }

  app.put("/api/quizzes/:id", updateQuiz); 
  app.post("/api/quizzes", addQuiz);
  app.get("/api/quizzes", getQuizzes);
  app.get("/api/:cid/quizzes", getQuizzesForCourse);
  app.delete("/api/quizzes/:id", deleteQuiz);
  
}

