const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const register = async(req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password){
        return res
            .status(400)
            .json({"message": "All fields required"});
    }
    //console.log('Before saving user...');
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    try{
        await user.save();
        const token = user.generateJwt();
        res.status(200).json({token});
    } catch (err){
        //console.error('Error encountered:', err);
        if (err.code === 11000) {
            res.status(400).json({ message: "Email already exists!" });
        } else {
            res.status(400).json(err);
    
        }
    }
};

const login = (req, res) => {
    console.log('Before loging in user authentication.js');
    if(!req.body.email || !req.body.password){
        return res
            .status(400)
            .json({"message": "All fields required"});
    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            //console.error("Error during authentication:", err);
            return res.status(500).json({ error: "Internal server error" });
        }
        if (user){
            console.log("success login");
            const token = user.generateJwt();
            res 
                .status(200)
                .json({token});
        } else {
            res
                .status(401)
                .json(info);
        }
    })(req, res);
        //console.log("end of login trial");
    };

module.exports = {
    register,
    login
};