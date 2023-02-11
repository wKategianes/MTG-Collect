var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MTG Collections' });
});

router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used
  'google',
  {
    scope: ['profile', 'email'],
    // Prompt for multiple accounts
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/collections',
    // Change to what is best for the app (landing page)
    failureRedirect: '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res) {
  req.logout(function() {
    res.redirect('/collections');
  });
});

module.exports = router;
