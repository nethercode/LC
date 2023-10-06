WITH Ratings AS (
    SELECT u.name, COUNT(*) AS num_ratings
    FROM MovieRating mr
    NATURAL JOIN Users u
    GROUP BY u.user_id, u.name
    ORDER BY num_ratings DESC, name ASC
    LIMIT 1
),
Averages AS (
    SELECT m.title, AVG(rating) AS avg_rating
    FROM MovieRating mr
    NATURAL JOIN Movies m
    WHERE YEAR(created_at) = 2020 AND MONTH(created_at) = 2
    GROUP BY m.movie_id, m.title
    ORDER BY avg_rating DESC, title ASC
    LIMIT 1
)
SELECT name AS results FROM Ratings
UNION
SELECT title AS results FROM Averages;