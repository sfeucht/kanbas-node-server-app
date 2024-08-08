import * as dao from "./dao.js"; 

export default function QuestionRoutes(app) {
  const updateQuestion = async (req, res) => {
    console.log('updateQuestion'); 
    const { id } = req.params;
    const question = req.body;
    const status = await dao.updateQuestion(id, question); 
    console.log('got past updateQuestion'); 
    res.json(status); 
  }

  const addQuestion = async (req, res) => {
    const question = { ...req.body, 
      _id: new Date().getTime().toString() };
    const status = await dao.createQuestion(question); 
    res.json(status); 
  }

  const getQuestion = async (req, res) => {
    const { id } = req.params;
    const question = await dao.findQuestionById(id); 
    res.json(question);
  }

  const getQuestions = async (req, res) => {
    const questions = await dao.findAllQuestions(); 
    res.json(questions);
  }

  const deleteQuestion = async (req, res) => {
    const { questionId } = req.params;
    const result = await dao.deleteQuestion(questionId); 
    res.json(result); 
  }

  app.put("/api/questions/:id", updateQuestion); 
  app.post("/api/questions", addQuestion);
  app.get("/api/questions", getQuestions);
  app.get("/api/questions/:id", getQuestion);
  app.delete("/api/questions/:id", deleteQuestion);
  
}

