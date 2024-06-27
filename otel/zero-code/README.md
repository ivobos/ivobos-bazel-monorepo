# Test OTel zero-code integration for JavaScript

To test this, first start the collector
```sh
bazel run otel/zero-code:collector
```
this collector writes some info to console, but doesn't decode anything that it gets.

The start the instrumented web application
```sh
bazel run otel/zero-code:web-app-with-trace
```

Finally run the ping program, it sends a ping to web application, and traces will be sent to collector (expect seconds of delay)
send-ping -> web-app (localhost:3000)
after some delay web-app will send trace to collector:
web-app -> collector(localhost:5001)
