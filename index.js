const app = require('./utils/app');
const db = require('./utils/db');
const articleController = require('./routes/articles');

app.use('/', articleController);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});