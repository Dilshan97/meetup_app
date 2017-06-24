import Meetup from './model';
const async = require('async');

export const createMeetup = (req, res) => {
    async.waterfall([
        (callback) => {
            Meetup.create(req.body,
            (err, res) => {
                if (err)
                    callback(err, false);
                if (res)
                    callback(null, { meetup: res });
            });
        }
    ], (err, result) => {
        if (err) {
            res.status(402).json({ error: true, message: 'Error with meetup' })
        }
        if (result) {
            res.status(201).json(result);
        }
    });
}

export const getMeetup = (req, res) => {
    async.waterfall([
        (callback) => {
            Meetup.find({})
            .exec((err, res) => {
                if (err) {
                    callback(null, err);
                }
                if (res){
                    callback(null, res);
                }
            });
        } 
    ], (err, result) => {
        if (err) {
            res.status(402).json({ error: true, message: 'Error with meetup' })
        }
        if (result) {
            res.status(201).json({meetups : result});
        }
    });
}

