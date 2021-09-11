const checkMillionDollarIdea = (req,res,next) => {
    if(req.body.numWeeks && req.body.weeklyRevenue && Number(req.body.numWeeks) && Number(req.body.weeklyRevenue) ){
        const numWeeks = Number(req.body.numWeeks);
        const weeklyRevenue = Number(req.body.weeklyRevenue);
        if(numWeeks * weeklyRevenue >= 1000000) next();
        else res.status(400).send();
    }   
    else res.status(400).send();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
