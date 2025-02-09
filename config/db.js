const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, '../data_management.db'), (err) => {
    if (err) {
        console.error('Failed to connect to the database:', err);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

module.exports = db;