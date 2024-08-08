import { model, MultipleChoice, TrueFalse, FillInTheBlanks } from "./schema.js";
import mongoose from "mongoose";

export const createQuestion = (question) => {
    delete question._id
    return model.create(question);
}
export const findAllQuestions = () => model.find();
export const findQuestionById = (questionId) => model.findById(questionId);
export const updateQuestion = async (questionId, question) => {
    // Find the question to determine its type
    const existingQuestion = await model.findById(new mongoose.Types.ObjectId(questionId));

    if (!existingQuestion) {
        throw new Error('Question not found');
    }
    
    // Determine the correct model based on the question type
    let QuestionModel;
    switch (existingQuestion.questionType) {
        case 'Multiple Choice':
            QuestionModel = MultipleChoice;
            break;
        case 'True/False':
            QuestionModel = TrueFalse;
            break;
        case 'Fill-in-the-Blanks':
            QuestionModel = FillInTheBlanks;
            break;
        default:
            throw new Error('Invalid question type');
    }

    // Update the question using the correct model
    const result = await QuestionModel.updateOne(
        { _id: new mongoose.Types.ObjectId(questionId) },
        { $set: question }
    );

    return result;
    // model.updateOne({ _id: questionId }, { $set: question });
}
export const deleteQuestion = (questionId) => model.deleteOne({ _id: String(questionId) });