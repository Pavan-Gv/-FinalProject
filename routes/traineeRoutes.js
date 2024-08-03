const router = require('express').Router();
const traineeRoutes = require('../controllers/trianeeController');

router.get("/getAllTrainees", traineeRoutes.getAllTrainees);
router.get("/getSpecificTrainee", traineeRoutes.getSpecificTrainee);
router.post("/createTrainee", traineeRoutes.createTrainee);
router.put("/updateTrainee", traineeRoutes.updateTrainee);
router.delete("/deleteTrainee/:id", traineeRoutes.deleteTrainee);

module.exports = router;