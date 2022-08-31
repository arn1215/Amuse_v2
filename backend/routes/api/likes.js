
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation')
const { check } = require('express-validator')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Like } = require('../../db/models');


const router = express.Router()

//================Get all likes for a song =========================

router.get("/:songId", asyncHandler(async(req,res) => {
    const songId = req.params.songId

    const likes = await Like.findAndCountAll({
        where: {
          songId
        }
    });

    res.json(likes)

}))



// router.get("/", asyncHandler(async(req,res) => {
//     const songId = 1

//     const likes = await Like.findAll({
//         where: {
//             songId
//         }
//     })

//     res.json(likes)

// }))


router.get("/:userId/:songId", asyncHandler(async(req,res) => {
    const {songId, userId} = req.params

    const likes = await Like.findOne({
        where: {
          songId, 
          userId  
        }
    });

    if (likes) {
        res.json({res: true})
    } else {
        res.json({res: false})
    }
}))



router.post("/", asyncHandler(async (req,res) => {
    const {id, songId, userId} = req.body
    const likes = await Like.findAll({
        where: {
            songId,
            userId
        }
    }) 
    if (likes.length > 0) {
        likes.forEach(like => {

            like.destroy()
        })
        return res.json("Unliked")
    } else {

        const like = await Like.create(req.body)
        return res.json({like})
    }
}))


router.delete('/', asyncHandler(async(req, res) => {
    // const likeId = req.params.likeId
    const {id, songId, userId} = req.body
    const likes = await Like.findAll({
        where: {
            songId,
            userId
        }
    })

    if (likes) {
        likes.forEach(like => {

            like.destroy()
        })
    }

    return res.json(likes)
}))






//================UPDATE A LIKE =========================

// router.put('/:likeId', asyncHandler(async(req,res) => {
//     const {like} = req.body
// }))

module.exports = router;