const mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/users',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(db => console.log('Conexión Posts Correcta.'))
    .catch(er => console.error(err));

let commentSchema = new Schema({
    autor: {type:String},
    mensaje:{type:String},
    fecha:{type:String}
});

let postsSchema = new Schema({
    titulo: {type:String, required:true},
    descripcion: {type:String, required: true},
    categoria: {type:String, required: true},
    fecha: {type: String, required:true},
    comentarios: [commentSchema]
});

let model = mongoose.model('contacs', postsSchema, 'contacts');
module.exports = model;