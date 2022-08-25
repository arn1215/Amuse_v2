
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song, Like } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation')
const { check } = require('express-validator')
const { setTokenCookie, requireAuth } = require('../../utils/auth');



const router = express.Router()


// get /songs/:songId
// router.get('/:userId',  asyncHandler(async (req, res) => {
//     const userId = parseInt(req.params.userId, 10)
//     const songId = parseInt(req.params.songId, 10)
//     const songs = await Song.findAll({
//         where: {
//             userId
//         }
//     })
//     return res.json(songs)
// }))

const songValidations = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({max: 50})
        .withMessage("Please provide a title under 50 characters long."),
    check('songURL')
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage("Please enter a valid MP3 Url."),
    check('imageUrl')
        .isURL()
        .withMessage("Please enter a valid image Url."),
    handleValidationErrors
]



//get =========================GET ONE SONG ==========================================
router.get('/:songId', asyncHandler(async(req, res) => {
    const songId = req.params.songId
    const song = await Song.findOne({
        where: {
            id: songId
        }
    })
    res.json(song)
    console.log(song)
}))


// post /songs ================CREATE A SINGLE SONG ==================================

router.post('/', songValidations, requireAuth, asyncHandler(async (req, res) => {
    const song = await Song.create(req.body)
    res.json(song)
})
)




//get /songs ===================GET ALL SONGS ===================================

router.get('/', asyncHandler(async (req, res) => {
    const songs = await Song.findAll({
        limit: 20,
        order: [
            ['createdAt', "DESC"]
        ]
    })
    res.json(songs)
}))




// ==========================UPDATE A SINGLE SONG ================================

router.put('/:songId', asyncHandler(async (req, res) => {
    // const songId = req.params.songId
    const {song} = req.body
    const {title, songURL, userId, songId} = song
    const editedSong = await Song.findOne({
        where: {
            id: songId
        }
    })
    if (editedSong) {

        await editedSong.update({
            title,
            songURL,
            userId
        })
    }

    return res.json(editedSong)
}))




//=====================DELETE A SINGLE SONG==============================

router.delete('/:songId', asyncHandler(async (req, res) => {
    const songId = req.params.songId

    const song = await Song.findOne({
        where: {
            id: songId
        }
    })
    

    //TODO add logic to check if the person deleting owns the song or if song doesnt exist
    if (song){

        await song.destroy()
    } else {

    }

    //TODO change where a user is redirected to
    return res.json({song})


}))

// ===================GET USERS LIKED SONGS======================

router.get("/likes/:id", asyncHandler(async(req,res) => {
    const userId = req.params.id
    const songs = await Like.findAll({
        where: { userId: userId },
        include: Song,   
    })
    
    return res.json(songs)
}))







module.exports = router;
