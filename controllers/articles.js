const db = require('../utils/db');

const getAllArticles = (req, res) => {
    console.log('getAllArticles');
    db.query('SELECT * FROM article', (err, results) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }

        res.render('index', {
            articles: results
        })
    });
}

module.exports = {
    getAllArticles
};