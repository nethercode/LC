SELECT ROUND(
    COUNT(DISTINCT player_id) / (SELECT COUNT(DISTINCT player_id) FROM Activity),
    2
) AS fraction
FROM (
    SELECT player_id, event_date,
        MIN(event_date) OVER (PARTITION BY player_id ORDER BY event_date) AS firstlog
    FROM Activity
) AS a
WHERE DATEDIFF(event_date, firstlog) = 1;