import model from "./model.js";
export const createCourse = (course) => {
    delete course._id
    return model.create(course);
}
export const findAllCourses = () => model.find();
export const findCourseById = (userId) => model.findById(courseId);
// export const findUserByUsername = (username) =>  model.findOne({ username: username });
// export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: String(courseId) });

// export const findUsersByPartialName = (partialName) => {
//     const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
//     return model.find({
//       $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
//     });
//   };