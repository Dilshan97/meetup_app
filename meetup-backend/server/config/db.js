import mongoose from 'mongoose';

const dbURI = 'mongodb://localhost/meetupDB';

module.exports = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect(dbURI);
    mongoose.connection
    .once('open', () => console.log('Mongodb Running'))
    .on('error', err => console.error(err));
}