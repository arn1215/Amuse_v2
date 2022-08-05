
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Song } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation')
const { check } = require('express-validator')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Like } = require('../../db/models');


const router = express.Router()

//================Get all Likes =========================

router.get("/:songId", asyncHandler(async(req,res) => {
    const songId = req.params.songId

    const likes = await Like.findAll();

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



router.post("/", asyncHandler(async (req,res) => {
    const {id, songId, userId} = req.body
    const likes = await Like.findAll({
        where: {
            songId,
            userId
        }
    }) 
    if (likes.length > 0) {
        return null
    } else {

        const like = await Like.create(req.body)
        res.json({like})
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