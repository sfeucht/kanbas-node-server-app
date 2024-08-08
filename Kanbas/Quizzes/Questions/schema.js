import mongoose from "mongoose";

// Base schema for questions
const Schema = mongoose.Schema; 

const questionSchema = new Schema({
  quizId: {
    type: Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  questionType: {
    type: String,
    enum: ["Multiple Choice", "True/False", "Fill-in-the-Blanks"],
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  userAttempts: {
    type: Map,
    of: Number,
    default: {}, // userId : number of attempts 
  },
}, { discriminatorKey: 'questionType', collection: 'questions' });

// Schema for Multiple Choice questions
const multipleChoiceSchema = new Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: [{
    type: String,
    required: true,
  }],
  correctAnswers: [{
    type: String,
    required: true,
  }],
  userAnswers: {
    type: Map,
    of: String,
    default: {} // userId: answer to this question 
  },
});

// Schema for True/False questions
const trueFalseSchema = new Schema({
  questionText: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: Boolean,
    required: true,
  },
  userAnswers: {
    type: Map,
    of: Boolean,
    default: {} // userId: answer to this question 
  },
});

// Schema for Fill-in-the-Blanks questions
const fillInTheBlanksSchema = new Schema({
  questionText: {
    type: String,
    required: true,
  },
  possibleAnswers: [{
    type: String,
    required: true,
  }],
  userAnswers: {
    type: Map,
    of: String,
    default: {} // userId: answer to this question 
  },
});

// export default { questionSchema, multipleChoiceSchema, trueFalseSchema, fillInTheBlanksSchema }
const model = mongoose.model('QuestionModel', questionSchema);
const MultipleChoice = model.discriminator('Multiple Choice', multipleChoiceSchema);
const TrueFalse = model.discriminator('True/False', trueFalseSchema);
const FillInTheBlanks = model.discriminator('Fill-in-the-Blanks', fillInTheBlanksSchema);

export { model, MultipleChoice, TrueFalse, FillInTheBlanks };
