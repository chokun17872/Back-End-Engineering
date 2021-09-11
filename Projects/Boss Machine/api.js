const express = require('express');
const apiRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase
  } = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const app = require('../server');

// minions route
apiRouter.get('/minions', (req,res,next) => {
    const allMinions = getAllFromDatabase('minions');
    res.send(allMinions); 

})

apiRouter.get('/minions/:minionId', (req,res,next) => {
    const minionById = getFromDatabaseById('minions',req.params.minionId);
    if(minionById){
        res.send(minionById);
    }
    else res.status(404).send();
})

apiRouter.post('/minions', (req,res,next) => {
    const newMinion = addToDatabase('minions',req.body);
    if(newMinion){
        res.status(201).send(newMinion);
    }
    else res.status(400).send();
})

apiRouter.put('/minions/:minionId', (req,res,next) => {
    const updatedMinion = updateInstanceInDatabase('minions',req.body);
    if(updatedMinion){
        res.send(updatedMinion);
    }
    else res.status(404).send();
})

apiRouter.delete('/minions/:minionId', (req,res,next) => {
    const deleteMinion = deleteFromDatabasebyId('minions',req.params.minionId);
    if(deleteMinion){
        res.status(204).send();
    }
    else res.status(404).send();
})

// ideas route
apiRouter.get('/ideas', (req,res,next) => {
    const allIdeas = getAllFromDatabase('ideas');
    res.send(allIdeas);
})

apiRouter.get('/ideas/:ideaId', (req,res,next) => {
    const ideaById = getFromDatabaseById('ideas',req.params.ideaId);
    if(ideaById){
        res.send(ideaById);
    }
    else res.status(404).send();
})

apiRouter.post('/ideas', checkMillionDollarIdea, (req,res,next) => {
    const newIdea = addToDatabase('ideas',req.body);
    if(newIdea){
        res.status(201).send(newIdea);
    }
    else res.status(400).send();
})

apiRouter.put('/ideas/:ideadId', (req,res,next) => {
    const updatedIdea = updateInstanceInDatabase('ideas',req.body);
    if(updatedIdea){
        res.send(updatedIdea);
    }
    else res.status(404).send();
})

apiRouter.delete('/ideas/:ideaId', (req,res,next) => {
    const deleteIdea = deleteFromDatabasebyId('ideas',req.params.ideaId);
    if(deleteIdea){
        res.status(204).send();
    }
    else res.status(404).send();
})

// meetings route
apiRouter.get('/meetings', (req,res,next) => {
    const allMeetings = getAllFromDatabase('meetings');
    res.send(allMeetings);
})

apiRouter.post('/meetings', (req,res,next) => {
    const newMeeting = createMeeting();
    addToDatabase('meetings',newMeeting);
    res.status(201).send(newMeeting);
})

apiRouter.delete('/meetings', (req,res,next) => {
    deleteAllFromDatabase('meetings');
    res.status(204).send();
})

module.exports = apiRouter;
