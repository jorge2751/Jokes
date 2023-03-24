const Joke = require("../models/jokes.model")

module.exports.apiTest = (req, res)=>{
    res.json({message: "It is working"})
}

module.exports.allJokes = (req, res)=>{
    Joke.find()
        .then(jokeList=> res.json(jokeList))
        .catch(err=>res.json(err))
}

module.exports.oneJoke = (req, res)=>{
    Joke.findOne({_id: req.params.id})
        .then(oneJoke=> res.json(oneJoke))
        .catch(err=>res.json(err))
}

module.exports.createJoke = (req, res)=>{
    console.log('Request body:', req.body);
    const newJoke = req.body
    Joke.create(newJoke)
        .then(addedJoke => res.json(addedJoke))
        .catch(err=>res.json(err))
}

module.exports.updateJoke = (req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id}, // criteria
        req.body, // updated info,
        {new: true, runValidators: true}// config
    )
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err=>res.json(err))
}

module.exports.deleteJoke = (req, res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then(message=>res.json(message))
        .catch(err=>res.json(err))
}