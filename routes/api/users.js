const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');


router.get('/test', (req,res)=>res.json({msg:"User works!"}));


/*
@Route: POST /memes
@Description: Post memes
@access: Public
*/
router.post('/',
        check('name','Name is Required').notEmpty(),
        check('caption', 'Please include a Caption').notEmpty(),
        check('url', 'Please include a URL').notEmpty(),
        async (req,res)=>{
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors.errors);
            }
            /*const errors={}
            const nameerror=await validationResult(req.body.name);
            if (!nameerror.isEmpty()) {
                errors.name=nameerror;
            }

            const urlerror = await validationResult(req.body.url);
            if (!urlerror.isEmpty()) {
                errors.url=urlerror;
            }

            const captionerror=await validationResult(req.body.caption);          
            if (!captionerror.isEmpty()) {
                errors.caption=captionerror;
            }

            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }*/
            const { name, caption, url } = req.body;
            try{
                user = new User({
                    name,
                    url,
                    caption
                });
                await user.save();
                res.json({id:user._id});
            }
            catch(err)
            {
                console.error(err.message);
                res.status(500).send('Server error!');
            }
})


/*
@Route: GET /memes
@Description: GET memes
@access: Public
*/
router.get('/',async (req,res)=>{
    try{
        const memes = await User.find().sort({date:-1});
        return res.json(memes.slice(0,101));
          
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error! Please try after sometime....');
    }
})

/*
@Route: GET /memes/:id
@Description: GET memes
@access: Public
*/
router.get('/:id',async (req,res)=>{
    try{
        const meme = await User.findById(req.params.id);
        if(!meme){
            return res.status(404).json({msg:"Meme not found!"});
        }
        res.json(meme);       
          
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error! Please try after sometime....');
    }
})


module.exports = router;