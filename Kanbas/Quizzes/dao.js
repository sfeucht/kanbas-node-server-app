import model from "./model.js";
export const createQuiz = (quiz) => {
    delete quiz._id
    return model.create(quiz);
}
export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) => model.findById(quizId);
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: String(quizId) });

export const findQuizByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({ title: { $regex: regex } });
  };