module.exports = app => {
    const subject = require("../controllers/subject.js");

    //retrieve all subjects
    app.get("/api/subjects/", subject.findAll);

    //find a subject by name
    app.get("/api/subjects/:name", subject.findOne);

    //create a new subject
    app.post("/api/subjects/", subject.create);

    //update a subject
    app.put("/api/subjects/", subject.update);

    //delete a subject
    app.delete("/api/subjects/:name", subject.delete);

}