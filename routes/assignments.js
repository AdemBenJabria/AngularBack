const CheckToken = require("../utils/CheckToken.js");

module.exports = app => {
    const assignment = require("../controllers/assignments");

    //retrieve all subjects
    app.get("/api/assignments", CheckToken, assignment.getAssignments);

    //find an assignment by id
    app.get("/api/assignments/:id",CheckToken, assignment.getAssignment);

    //delete an assignment by id
    app.delete("/api/assignments/:id", CheckToken, assignment.deleteAssignment);

    //create an assignment
    app.post("/api/assignments", CheckToken, assignment.postAssignment);

    //update an assignment
    app.put("/api/assignments", CheckToken, assignment.updateAssignment);

}