const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1615',
    max: 20,
    database: 'desafio_final_individual_dds_t12_gabriel_abal'
})

module.exports = pool