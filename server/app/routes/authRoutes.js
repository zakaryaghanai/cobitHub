const router = require('express').Router();
const authController = require('../controllers/authController');

router.post('/signin', authController.signIn);
router.post('/signup', authController.signUp);
router.post('/signout', authController.signOut);
router.post('/accountVerification', authController.verifyUser);

module.exports = router;

