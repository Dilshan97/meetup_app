import mongoose, { Schema } from 'mongoose';

const MeetupScema = new Schema({
    title: {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
});

export default mongoose.model('Meetup', MeetupScema);