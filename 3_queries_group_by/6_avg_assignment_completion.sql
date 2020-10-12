SELECT name, AVG(duration) AS average_assignment_duration
FROM assignment_submissions
JOIN students ON student_id = students.id
WHERE end_date IS NULL
GROUP BY name
ORDER BY average_assignment_duration DESC;