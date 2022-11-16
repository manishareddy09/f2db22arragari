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
exports.ball_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await ball.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
 
// Handle ball delete on DELETE. 
exports.ball_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await ball.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle ball update form on PUT. 
// Handle ball update form on PUT. 
exports.ball_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await ball.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.ball_colour)  
               toUpdate.ball_colour = req.body.ball_colour; 
        if(req.body.ball_size) toUpdate.ball_size = req.body.ball_size; 
        if(req.body.ball_cost) toUpdate.ball_cost = req.body.ball_cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

 // Handle a show one view with id specified by query 
 exports.ball_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await ball.findById( req.query.id) 
        res.render('balldetail',  
{ title: 'ball Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 