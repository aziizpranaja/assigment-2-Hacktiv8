import { Router } from 'express';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import { jwt_secret } from "../config.js";
import { checkCredentials } from '../middlewares/checkCredentials.js';


var account = JSON.parse(fs.readFileSync('./account.json'));
const router = Router();

router.post('/', function (req, res) {
    var username1 = req.body.userinput; 
    var password1 = req.body.passinput; 

    
    if (username1 == account.email && password1 == account.password) {
        const token = jwt.sign({...account}, jwt_secret, {expiresIn: "24h"});
        res.json({ status: "success", message: "sucsess login", users: account.email, token: token});
    }

    else if (username1 == account.email && password1 != account.password) {
        var incorrectp = ("Invalid Password");
        res.json({ status: "error", message: incorrectp});
    }

    else if (username1 != account.email) {
        var incorrectu = ("Not a registered username");
        res.json({ status: "error", message: incorrectu});
    }

});

router.get('/',  checkCredentials, function(req, res){
    res.json(account);
});

export default router;