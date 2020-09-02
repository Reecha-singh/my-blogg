var express = require('express');
var router = express.Router();
var User = require('./users');
var passport = require('passport');
var localStrategy = require('passport-local');

passport.use(new localStrategy(User.authenticate()));

router.get('/', function(req, res){
  res.render('index');
});

router.post('/reg',function(req, res){
  var newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email
 })

User.register(newUser, req.body.password)
  .then(function(registeredUser){
    passport.authenticate('local')(req, res, function(){
      res.redirect('/profile');
    })
  })
});
router.post('/login',passport.authenticate('local',{
  successRedirect:'/profile',
  failureRedirect:'/'
}),function(req,res){});

router.get('/profile' ,function(req, res){
  res.send('under maintence');
}); 

module.exports = router;
