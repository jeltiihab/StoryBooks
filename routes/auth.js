const express = require('express')
const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', {}))

// @desc Dashboard
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})

module.exports = router
