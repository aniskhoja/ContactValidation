const { Model } =require('objection');
const knexfile = require('../knexfile');
const Knex = require('knex');

function setupDb(params) {
    const db = Knex(knexfile.development);
    Model.knex(db)
    console.log("DB Connected")
}

module.exports = setupDb;