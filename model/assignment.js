let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let aggregatePaginate = require('mongoose-aggregate-paginate-v2');

let AssignmentSchema = Schema({
    id: Number,
    nom: String,
    dateDeRendu: Date,
    rendu: Boolean,
    auteur: String,
    matiere: String,
    note: Number,
    remarque: String
});
AssignmentSchema.plugin(aggregatePaginate);
module.exports = mongoose.model('assignments', AssignmentSchema);
