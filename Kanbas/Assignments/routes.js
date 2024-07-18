import db from "../Database/index.js";

export default function AssignmentRoutes(app) {
  app.delete("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    db.assignments = db.assignments.filter((a) => a._id !== aid);
    res.sendStatus(200);
  });    
  app.get("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const assignments = db.assignments.filter((a) => a.course === cid);
    res.json(assignments);
  });
  app.post("/api/courses/:cid/assignments", (req, res) => {
    const { cid } = req.params;
    const newAssign = {
      ...req.body,
      course: cid,
      id: new Date().getTime().toString(),
    };
    db.assignments.push(newAssign);
    res.send(newAssign);
  });
  app.put("/api/assignments/:aid", (req, res) => {
    const { aid } = req.params;
    const assignIndex = db.assignments.findIndex(
      (a) => a._id === aid);
    db.assignments[assignIndex] = {
      ...db.assignments[assignIndex],
      ...req.body
    };
    res.sendStatus(204);
  });


}
