const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs')
const commentsRouter = require("./comments")
const likesRouter = require('./likes')

const { requireAuth, restoreUser, setTokenCookie } = require('../../utils/auth.js');

const {generateUploadURL} = require("../../s3")





router.use('/comments', commentsRouter)

router.use('/songs', songsRouter)

router.use('/session', sessionRouter)

router.use('/users', usersRouter)

router.use("/likes", likesRouter)

// GENERATE S3 URL TO SEND BACK TO CLIENT
router.get('/s3URL', async (req, res) => {
  const url = await generateUploadURL();
  return res.json({ url });
});





































// //this route tests the setTokenCookie function
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'StrawberryFam'
//         }
//     })
//     setTokenCookie(res, user)
//     return res.json({user})
// }))

// //test route for restore user
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );


// // test route for require auth

// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );


module.exports = router;