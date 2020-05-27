const mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/users',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(db => console.log('Conexión Comments Correcta.'))
    .catch(er => console.error(err));

let commentsSchema = new Schema({
    autor: {type:String},
    mensaje:{type:String},
    fecha:{type:String}
});

let model = mongoose.model('comments', commentsSchema, 'comments');
module.exports = model;