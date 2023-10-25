const mongoose= require('mongoose');
const bcrypt = require('bcrypt');

// schema defines for document in movie collection
let movieSchema = mongoose.Schema(
    {
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],  // Reference to Genre schema
    Directors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Director' }],  // Reference to Director schema
    Actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }],  // Reference to Actor schema
    imageURL: String,
    Release_Date: Date,
    Ratings: Number, 
    Featured: Boolean
}

); 
// Schema for genres
let genreSchema = mongoose.Schema({
    name: String,
    description: String
});
// // Schema for directors
let directorSchema = mongoose.Schema(
    {
        name: String,
        bio : String,
        birth_year: Date,
        death_year: Date
    }
);
// // Schema for actors
let actorSchema= mongoose.Schema(
    {
        name: String,
        birth_date: Date
    }
);
// Schema for users
let userSchema = mongoose.Schema(
    {
        username: {type:String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true},
        birth_date: Date,
        favorite_movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
});

// Password hashing and validation methods for User schema
userSchema.statics.hashPassword = (password)=>{
    return bcrypt.hashSync(password, 12);
};
userSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

// model creation 
let Movie= mongoose.model('Movie', movieSchema);
let Genre= mongoose.model('Genre', genreSchema);
let Director = mongoose.model('Director', directorSchema);
let Actor = mongoose.model('Actor', actorSchema);
let User= mongoose.model('User', userSchema);


 // Exporting the models
 module.exports = { Movie, Genre, Director, Actor, User };


// module.exports.Movie = Movie;
// module.exports.Genre = Genre;
// module.exports.Director= Director;
// module.exports.Actor= Actor;
// module.exports.User = User;