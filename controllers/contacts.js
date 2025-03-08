const mongodb = require('../data/database');
const objectId = require('mongodb').objectId;

const getAll = async (req, res) => {
    const result = await mongodb.gettDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    const contactId = new objectId(req.params.id);
    const result = await mongodb.gettDatabase().db().collection('contacts').find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};