const Pool = require('pg/lib').Pool;
const fs = require('fs');
var path = require('path');

const pool = new Pool({
    user: "andreas",
    password: "moreno92100.221",
    host: "postgresql-50058-0.cloudclusters.net",
    port: 18577,
    database: "fjaesbog",
})

module.exports = pool;

