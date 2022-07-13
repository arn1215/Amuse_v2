
const express = require('express');
const asyncHandler = require('express-async-handler');
const { Comment } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation')
const { check } = require('express-validator')
const { setTokenCookie, requireAuth } = require('../../utils/auth');



const router = express.Router()

const songValidations = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({max: 50})
        .withMessage("Please provide a title under 50 characters long."),
    handleValidationErrors
]



// post  ================CREATE A SINGLE comment ==================================
//TODO add requireAuth
router.post('/', asyncHandler(async (req, res) => {
    const comment = await Comment.create(req.body)
    res.json(comment)
})
)




//get  ===================GET ALL COMMENTS ===================================

router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll()
    res.json(comments)
}))


//get ================GET A SONGS COMMENTS ================================
router.get('/:songId',  asyncHandler(async (req, res) => {
    const songId = req.params.songId
    const comments = await Comment.findAll({
        where: {
            songId
        },

    })
    return res.json(comments)
}))

// router.get('/:commentId',  asyncHandler(async (req, res) => {
//     const commentId = req.params.commentId * 1
//     const comments = await Comment.findAll({
//         where: {
//             commentId
//         },

//     })
//     return res.json(comments)
// }))





// ==========================UPDATE A COMMENT ================================

router.put('/:commentId/:userId',  asyncHandler(async (req, res) => {
    const commentId = req.params.commentId * 1
    const userId = req.params.userId * 1
    
    const comment = req.body.body
 
    const editedComment = await Comment.findByPk(commentId)
  
     const newComment = await editedComment.update({body: comment})


    return res.json(newComment)
}))




//=====================DELETE A SINGLE COMMENT==============================

router.delete('/:commentId', asyncHandler(async (req, res) => {
    const commentId = req.params.commentId

    const comment = await Comment.findOne({
        where: {
            id: commentId
        }
    })
    

    //TODO add logic to check if the person deleting owns the comment or if comment doesnt exist
    if (comment){

        await comment.destroy()
    } else {

    }

    //TODO change where a user is redirected to
    return res.json({comment})

}))

module.exports = router;