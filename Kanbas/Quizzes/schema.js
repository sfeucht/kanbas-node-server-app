import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    title: String,
    information: String,
    published: {
        type: Boolean,
        default: false 
    },
    quizType: {
        type: String,
        enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
        default: "Graded Quiz",
      },
    points: Number,
    assignmentGroup: {
        type: String,
        enum: ["Quizzes", "Exams", "Assignments", "Projects"],
        default: "Quizzes"
    },
    shuffleAnswers: {
        type: Boolean,
        default: true
    },
    timeLimitMinutes: {
        type: Number,
        default: 20
    },
    multipleAttempts: {
        type: Boolean,
        default: false 
    },
    howManyAttempts: {
        type: Number,
        default: 1
    },
    showCorrectAnswers: {
        type: String,
        enum: ["Immediately"],
        default: "Immediately"
    },
    accessCode: {
        type: String,
        default: ""
    },
    oneQuestionAtTime: {
        type: Boolean,
        default: true 
    },
    webcamRequired: {
        type: Boolean,
        default: false 
    },
    lockQuestionsAfterAnswering: {
        type: Boolean,
        default: false 
    },
    dueDate: Date,
    availableDate: Date, 
    untilDate: Date,
    courseId: mongoose.Schema.Types.ObjectId,
    questions: {
        type: Array, // array of question IDs 
        default: []
    }
  },
  { collection: "quizzes" }
);
export default quizSchema;