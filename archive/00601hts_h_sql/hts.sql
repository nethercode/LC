SELECT DISTINCT s1.id, s1.visit_date, s1.people
FROM Stadium s1, Stadium s2
WHERE (s1.people >= 100 AND s1.id + 1 = s2.id AND s2.people >= 100 AND EXISTS (SELECT * FROM Stadium s3 WHERE s1.id + 2 = s3.id AND s3.people >= 100))
   OR (s1.people >= 100 AND s1.id - 1 = s2.id AND s2.people >= 100 AND EXISTS (SELECT * FROM Stadium s3 WHERE s1.id - 2 = s3.id AND s3.people >= 100))
   OR (s1.people >= 100 AND s1.id + 1 = s2.id AND s2.people >= 100 AND EXISTS (SELECT * FROM Stadium s3 WHERE s1.id - 1 = s3.id AND s3.people >= 100))
ORDER BY s1.visit_date;
