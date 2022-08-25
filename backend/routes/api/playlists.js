
const express = require('express');
const asyncHandler = require('express-async-handler');
const { PlaylistSong } = require('../../db/models');



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


//get =========================GET ONE SONG ==========================================
router.get('/:playlistId', asyncHandler(async(req, res) => {
    const playlistId = req.params.playlistId
    const playlist = await Song.findOne({
        where: {
            id: playlistId
        }
    })
    res.json(playlist)
}))


// post /songs ================CREATE A SINGLE SONG ==================================

router.post('/',  requireAuth, asyncHandler(async (req, res) => {
    const playlist = await PlaylistSong.create(req.body)
    res.json(playlist)
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

router.put('/:playlistId', asyncHandler(async (req, res) => {
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

router.delete('/:playlistId', asyncHandler(async (req, res) => {
    const playlistId = req.params.songId

    const playlist = await PlaylistSong.findOne({
        where: {
            id: playlistId
        }
    })
    

    //TODO add logic to check if the person deleting owns the song or if song doesnt exist
    if (playlist){

        await PlaylistSong.destroy()
    } else {

    }

    //TODO change where a user is redirected to
    return res.json({playlist})


}))

module.exports = router;
