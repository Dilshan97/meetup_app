import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/meetupDB');
    mongoose.connection
        .once('open', () => console.log('Mongodb Running'))
        .on('error'), err => console.error(err);
}