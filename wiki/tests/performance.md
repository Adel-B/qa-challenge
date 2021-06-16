# Performance

## Performance benchmarking via ApacheBench
Example:
```
ab -n 1000 -c 20 http://localhost:5000/
```
Results:
```
This is ApacheBench, Version 2.3 <$Revision: 1879490 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            5000

Document Path:          /
Document Length:        561 bytes

Concurrency Level:      20
Time taken for tests:   1.529 seconds
Complete requests:      1000
Failed requests:        0
Total transferred:      844000 bytes
HTML transferred:       561000 bytes
Requests per second:    654.09 [#/sec] (mean)
Time per request:       30.577 [ms] (mean)
Time per request:       1.529 [ms] (mean, across all concurrent requests)
Transfer rate:          539.11 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.2      0       1
Processing:     5   29   7.7     27      79
Waiting:        5   21   6.4     20      78
Total:          6   29   7.7     27      79

Percentage of the requests served within a certain time (ms)
  50%     27
  66%     31
  75%     33
  80%     34
  90%     38
  95%     45
  98%     47
  99%     49
 100%     79 (longest request)
```

## Performance Audit running on CI via Lighthouse CI

See the results of each PR
example: https://storage.googleapis.com/lighthouse-infrastructure.appspot.com/reports/1623823499701-23777.report.html


## What to do to next to improve the performance ?

- Build the App in production mode
- Set some threshold in Lighthouse CI to fail the build in case of performance goes lower than threshold.
- Setup a Lighthouse CI server to store and compare the history of Lighthouse reports.