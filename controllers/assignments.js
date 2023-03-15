const jwt = require('jsonwebtoken');
let Assignment = require('../model/assignment');
let config = require('../config');

// get all assignments (GET)
exports.getAssignments = (req, res) => {
    Assignment.find((err, assignments) => {
        if (err) {
            res.send(err)
        }
        res.send(assignments);
    });
}


// get one assignment (GET)
exports.getAssignment = (req, res) => {
    let assignmentId = req.params.id;
    Assignment.findOne({ id: assignmentId }, (err, assignment) => {
        if (err) {
            res.send(err)
        }
        res.send(assignment);
    })
}

// add an assignment (POST)
exports.postAssignment = (req, res) => {
    let assignment = new Assignment();
    assignment.id = req.body.id;
    assignment.nom = req.body.nom;
    assignment.dateDeRendu = req.body.dateDeRendu;
    assignment.rendu = req.body.rendu;

    assignment.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ message: `${assignment.nom} saved!` });
        }
    });
}


// update an assignment (PUT)
exports.updateAssignment = (req, res) => {
    Assignment.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, assignment) => {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: 'updated' })
        }
    });

}

// delete an assignment (DELETE)
exports.deleteAssignment = (req, res) => {

    Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        else {
            res.json({ message: `${assignment.nom} deleted` });
        }
    })
}

