WITH stats AS (
  SELECT 
    Request_at, 
    T.Status <> 'completed' AS IsCancelled
  FROM Trips T 
  JOIN Users C ON (Client_Id = C.Users_Id AND C.Banned = 'No') 
  JOIN Users D ON (Driver_Id = D.Users_Id AND D.Banned = 'No') 
  WHERE
    Request_at BETWEEN '2013-10-01' AND '2013-10-03'
)
SELECT 
  Request_at AS Day,
  ROUND(CAST(SUM(IsCancelled) AS REAL) / CAST(COUNT(*) AS REAL), 2) AS 'Cancellation Rate'
FROM stats
GROUP BY Request_at;
