const mongoose= require('mongoose');
const bcrypt = require('bcrypt');

// schema defines for document in movie collection
let movieSchema = mongoose.Schema(
    {
    Title : {type: String, required: true},
    Description: { type: String, required:true},
    Genres: { 
        name: String,
        description: String
     },
    Directors:{
        name: String,
        bio : String,
        birth_year: Date,
        death_year: Date
    },
    Actors:[{ 
        name: String,
        birth_date: Date
    }],
    imageURL: String,
    Release_Date: Date,
    Ratings: Number, 
    Featured: Boolean
}

); 
let genreSchema = mongoose.Schema(
    {
        name: String,
        description: String
    }
);

let directorSchema = mongoose.Schema(
    {
        name: String,
        bio : String,
        birth_year: Date,
        death_year: Date
    }
);

let actorSchema= mongoose.Schema(
    {
        name: String,
        birth_date: Date
    }
);

let userSchema = mongoose.Schema(
    {
        username: {type:String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true},
        birth_date: Date,
        favorite_movies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
});
userSchema.statics.hashPassword = (password)=>{
    return bcrypt.hashSync(password, 12);
};
userSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

// these will create a collection of db.movies & db.users
let Movie= mongoose.model('Movie', movieSchema);
let Genre= mongoose.model('Genre', genreSchema);
let Director = mongoose.model('Director', directorSchema);
let Actor = mongoose.model('Actor', actorSchema);
let User= mongoose.model('User', userSchema);


// exports these two models to index.js
module.exports.Movie = Movie;
module.exports.Genre = Genre;
module.exports.Director= Director;
module.exports.Actor= Actor;
module.exports.User = User;