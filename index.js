const app = require('./utils/app');
const db = require('./utils/db');

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});