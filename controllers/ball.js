var ball = require('../models/ball'); 
 
// List of all ball 
// List of all ball 
exports.ball_list = async function(req, res) { 
    try{ 
        theball = await ball.find(); 
        res.send(theball); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific ball. 
exports.ball_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball detail: ' + req.params.id); 
}; 
 
// Handle ball create on POST. 
// Handle ball create on POST. 
exports.ball_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new ball(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"ball_type":"goat", "cost":12, "size":"large"} 
    document.ball_colour = req.body.ball_colour; 
    document.ball_size = req.body.ball_size; 
    document.ball_cost = req.body.ball_cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle ball delete form on DELETE. 
exports.ball_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball delete DELETE ' + req.params.id); 
}; 
 
// Handle ball update form on PUT. 
exports.ball_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.ball_view_all_Page = async function(req, res) { 
    try{ 
        theball = await ball.find(); 
        res.render('ball', { title: 'ball Search Results', results: theball }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 