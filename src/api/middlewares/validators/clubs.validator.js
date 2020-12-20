const { validationResult,param,body} = require('express-validator');

// 422 Unprocessable Entity
const ClubsValidator = {
    addClubValidator: async (req,res,next)=>{
        await Promise.all([
            body('name').exists().withMessage("name가 존재하지 않아요").isString().isLength({max:15}).run(req),
            body('category').exists().withMessage("category가 존재하지 않아요").isNumeric().run(req),
            body('content').exists().withMessage('content가 존재하지 않아요').run(req),
            body('phone').exists().withMessage('phone가 존재하지 않아요').run(req),
            body('site').exists().withMessage('site가 존재하지 않아요').run(req),
            body('masterName').exists().withMessage('masterName이 존재하지 않아요').run(req),
        ]);
        const errors = validationResult(req);
        if(!errors.isEmpty())
            res.status(422).json({success:false,errors: errors.array()});
        else next();
    },
    clubIdValidator: async (req,res,next)=>{
        await param('clubId')
            .exists().withMessage("clubId가 존재하지 않아요")
            .isNumeric().withMessage("숫자만 들어올 수 있어요")
            .run(req);
        const errors = validationResult(req);
        if (!errors.isEmpty())
            res.status(422).json({success:false,errors:errors.array()});
        else next();

    },
};

module.exports = ClubsValidator;