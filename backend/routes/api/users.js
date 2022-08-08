const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Song, Like } = require('../../db/models');


const router = express.Router();

// router.post('/', asyncHandler(async(req, res) => {
//     const {username, email, password} = req.body

//     const user = await User.signup({username, email, password})

//     await setTokenCookie(res, user)

//     return res.json({user})
// }))

const signUpValidations = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage("Username must be at least 4 characters long."),
    check('username')
        .not()
        .isEmail()
        .withMessage('User name cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long."),
    handleValidationErrors

]


//user signup route
router.post(
    '/',
    signUpValidations,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user
        });
    })
);

router.get('/:userId',  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.userId, 10)
    const userAndSongs = await User.findAll({
        where: {id: userId},
        include: Song,

    })
    return res.json(userAndSongs)
}))












// ================GET A USERS LIKED SONGS==========================






// router.get("/:userId/playlists/:playlistId",)




module.exports = router;