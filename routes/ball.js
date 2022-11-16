// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('ball', { title: 'Search Results ball' });
// });

// module.exports = router;

var express = require('express'); 
const ball_controllers= require('../controllers/ball'); 
var router = express.Router(); 
 
/* GET ball */ 
router.get('/', ball_controllers.ball_view_all_Page ); 
module.exports = router; 

// GET request for one ball. 
router.get('/ball/:id', ball_controllers.ball_detail); 

/* GET detail ball page */ 
router.get('/detail', ball_controllers.ball_view_one_Page); 

/* GET create ball page */ 
router.get('/create', ball_controllers.ball_create_Page); 

/* GET create update page */ 
router.get('/update', ball_controllers.ball_update_Page); 

/* GET delete ball page */ 
router.get('/delete', ball_controllers.ball_delete_Page); 