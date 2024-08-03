const traineeModel = require('../models/traineeModel');

async function getAllTrainees(req, res) {
    try {
        let trainees = await traineeModel.find();
        if(trainees.length>0){
        res.status(200).json({
            "data": trainees,
            "msg": "",
            "error": ""
        });
    }
    else{
        res.status(200).json({
            "data": "",
            "msg": "NO trainee found",
            "error": ""
        });
    }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

async function getSpecificTrainee(req, res) {
try{
    let trainees = await traineeModel.find({"name":req.query.name})
    if(trainees.length>0){
        res.status(200).json({
            "data": trainees,
            "msg": "",
            "error": ""
        });
    }
}catch(err){
    res.status(500).json({
        "data": "",
        "msg": "",
        "error": err.message
    });
}

    // res.send(req.query.id + " " + req.query.name);
}

async function createTrainee(req, res)  {
    try {
        const trainee = new traineeModel(req.body);
        await trainee.save();
        res.status(201).json({
            "data": "",
            "msg": "Trainee Created Successfully!",
            "error": ""
        })
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
    
}

async function updateTrainee(req, res) {
    try {
        let trainee = await traineeModel.updateOne({"_id":req.body._id},req.body)
        if(trainee.modifiedCount>0){
            res.status(500).json({
                "data": "",
                "msg": "Trainee has updated successfully",
                "error":""
            });
        }
        else{
            res.status(500).json({
                "data": "",
                "msg": "Trainee has not been updated successfully",
                "error":""
            });
        }
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error":""
        });
    }
    
    // res.send(req.body);
}

async function deleteTrainee(req, res) {
    try{
        let trainee = await traineeModel.deleteOne({"_id":req.params.id})
        if(trainee.deletedCount>0){
            res.status(500).json({
                "data": "",
                "msg": "Trainee has deleted successfully",
                "error":""
            });
        }
        else{
            res.status(500).json({
                "data": "",
                "msg": "Trainee has not been deleted successfully/No trainee",
                "error":""
            });
        }
    }
    catch(err){
        res.status(500).json({
            "data": "",
            "msg": "",
            "error":""
        });
    }
}

module.exports = {
    getAllTrainees,
    getSpecificTrainee,
    createTrainee,
    updateTrainee,
    deleteTrainee
}