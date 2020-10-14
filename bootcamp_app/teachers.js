const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const text = 'SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort FROM teachers JOIN assistance_requests ON teacher_id = teachers.id JOIN students ON students.id = student_id JOIN cohorts ON cohorts.id = students.cohort_id WHERE cohorts.name = $1 ORDER BY teacher';
const cohortName = process.argv[2];
const values = [cohortName];

pool.query(text, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));