let model = require("../models/posts_models");
module.exports = {
    show: function(req,res){
        model.find({},function(err,items){
            if(!err){
                res.json(items)
            }else{
                res.sendStatus(500);
                console.log(err);
            }
        });
    },
    detail:function(req,res){
        let val_id = req.params.id;
        model.findOne({_id:val_id},function(err,data){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else{
                res.json(data);
            }
        })
    },
    create:function(req,res){
        let obj = new model;
        obj.titulo = req.body.titulo;
        obj.descripcion = req.body.descripcion;
        obj.categoria = req.body.categoria;
        obj.fecha = req.body.fecha;
        obj.comentarios = req.body.comentarios;
        obj.save(function(err,newData){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else{
                res.json(newData);
            }
        })
    },
    update:function(req,res){
        let val_id = req.params.id;
        let datos = {
            titulo : req.body.titulo,
            descripcion : req.body.descripcion,
            categoria : req.body.categoria,
            fecha : req.body.fecha
        };
        model.findByIdAndUpdate({_id:val_id},datos,function(err,newData){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else{
                res.send(newData);
            }
        });
    },
    delete:function(req,res){
        let val_id = req.params.id;
        model.deleteOne({_id:val_id},function(err){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }else{
                res.sendStatus(200);
            }
        })
    }
    
    //show1: function(req,res){
    //    let val_id = req.params.id;
    //    model.findById(val_id,function(err,items){
    //        if(!err){
    //            res.sendStatus(500);
    //            console.log(err);
    //            
    //        }else{
    //            res.json(items)
    //        }
    //    });
    //}

};