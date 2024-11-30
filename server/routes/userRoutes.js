const {Router} = require("express");
const { getUsers, createUser, loginUser, logoutUser } = require("../controllers/userController");
const {auth} = require("../middleware/authMiddleware");

const router = Router();

//get all users

router.get("/",auth,getUsers);

//create user

router.post("/",createUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);

module.exports = router;