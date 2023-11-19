//  ===========
// AUTH ROUTES
//  ===========
var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res){
    res.render("landing");
});

router.get("/timer",function(req,res){
		res.render("timer")
});

router.get("/crackers2",function(req,res){
		res.render("crackers2")
});

router.get("/blogs",function(req,res){
		res.render("blogs")
});

router.get("/blog1",function(req,res){
		res.render("blog1")
});
router.get("/blog2",function(req,res){
		res.render("blog2")
});
router.get("/blog3",function(req,res){
		res.render("blog3")
});
router.get("/blog4",function(req,res){
		res.render("blog4")
});
router.get("/blog5",function(req,res){
		res.render("blog5")
});
router.get("/blog6",function(req,res){
		res.render("blog6")
});
router.get("/greetings",function(req,res){
		res.render("greetings")
});
router.get("/greetings1",function(req,res){
		res.render("greetings1")
});

router.get("/closures",function(req,res){
		res.render("closures")
});

router.get("/guide",function(req,res){
		res.render("guide")
});


// show register form
router.get("/register", function(req, res){
   res.render("register"); 
});

//handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success", "Welcome to YelpCamp " + user.username);
           res.redirect("/campgrounds"); 
        });
    });
});

//show login form
router.get("/login", function(req, res){
   res.render("login"); 
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campgrounds",
        failureRedirect: "/login"
    }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "Logged you out!");
   res.redirect("/campgrounds");
});

module.exports = router;