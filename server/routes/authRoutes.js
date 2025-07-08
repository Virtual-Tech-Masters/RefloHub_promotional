const express = require('express');
const router = express.Router();
const { saveFreelancer, saveBusiness } = require('../controllers/authController');
const upload = require('../middleware/multerConfig');

router.post('/register/freelancer', upload.fields([
  { name: 'liveImage', maxCount: 1 },
  { name: 'idProofs', maxCount: 5 },
]), saveFreelancer);

router.post('/register/business', upload.fields([
  { name: 'liveImage', maxCount: 1 },
  { name: 'idProofs', maxCount: 5 },
  { name: 'businessDocs', maxCount: 5 },
]), saveBusiness);

module.exports = router;