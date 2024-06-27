
# python library and web app
```bash
bazel run projects/python_web
```
http://127.0.0.1:5000

also to update third_part/requirements_lock.txt if you want with
```bash
bazel run //third_party:requirements.update
```

# node library and web app
```bash
bazel run projects/node_web
```
http://localhost:8080/

# java application 
Query Maven libraries we configured with
```bash
bazel query @maven//...
```
./maven_install.json has all dependencies pinned
it was generated with 
```bash
bazel run @maven//:pin
```
if you update maven dependencies in WORKSPACE.bazel
then update the pin file with 
```bash
bazel run @unpinned_maven//:pin
```
now build with
```bash
bazel build projects/java_greeter/...
```
run with
```bash
bazel run projects/java_greeter/src/main/java/com/ivobos/javagreeter/main
```
