const Subject = require('../model/subject');

exports.findAll = (req, res) => {
    Subject.find((err, subjects) => {
        if (err) {
            return res.status(500).send('No subjects found')
        }
        res.json(subjects);
    })
}

exports.create = (req, res) => {
    Subject.findOne({
        name: req.body.name
    },
        (err, value) => {
            if (value) {
                return res.status(409).send("This subject already exists");
            }
            let subject = new Subject();
            subject.name = req.body.name.toLowerCase();
            subject.description = req.body.description || "No description";
            subject.credits = req.body.credits;
            subject.image = req.body.image || null;
            subject.imageTeacher = req.body.imageTeacher || null;
            subject.save((err) => {
                if (err) {
                    return res.status(500).send('Error on the server');
                }
                res.json({ message: `${subject.name} saved!` });
            })
        })
}

exports.update = (req, res) => {
    Subject.findOneAndUpdate({
        name: req.body.name.toLowerCase()
    },
        req, body,
        (err, subject) => {
            if (!subject) {
                return res.status(404).send("No subject with this name was found");
            } else {
                res.json({ message: `${subject.name} updated` });
            }
        })
}

exports.delete = (req, res) => {
    console.log(req.params.name)
    Subject.findOneAndRemove({
        name: req.params.name.toLowerCase()
    }, (err, subject) => {
        if (!subject) {
            return res.status(404).send("No subject with this name was found");
        } else {
            res.json({ message: `${subject.name} deleted` });
        }
    })
}

exports.findOne = (req, res) => {
    Subject.findOne({
        name: req.params.name.toLowerCase()
    }, (err, subject) => {
        if (!subject) {
            return res.status(404).send("No subject with this name was found");
        } else {
            res.send(subject);
        }
    })
}