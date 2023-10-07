SELECT s.user_id, 
    IFNULL(ROUND(COALESCE(c.confirmed_count, 0) / c.total_count, 2), 0) AS confirmation_rate
FROM Signups s
LEFT JOIN (
    SELECT user_id, 
        COUNT(*) AS total_count,
        SUM(action = 'confirmed') AS confirmed_count
    FROM Confirmations
    GROUP BY user_id
) c ON s.user_id = c.user_id;