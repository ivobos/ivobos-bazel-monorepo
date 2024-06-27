# ivobos-bazel-monorepo
Sandbox monorepo setup with nix+bazel (but not bzlmod). 
It has python, react, go and other hello-world style apps.

# nix setup
Setup nix to get bazel, python and other build tools

## Install nix 
from https://nixos.org/download/

## Install direnv and configure
```
brew install direnv
```
Hook direnv into shells as per https://direnv.net/docs/hook.html

# enable flakes
```
sudo vi /etc/nix/nix.conf
```
Add following:
```
experimental-features = flakes nix-command
```

# enable flake first time 
first time you will have to enable the nix flake
```
cd ~/src/ivobos-bazel-monorepo
direnv allow
```

# now you can build everything with
```bash
bazel build //...
```

# python library and web app
```bash
bazel run projects/python_web
```
http://127.0.0.1:5000

also to update third_part/requirements_lock.txt if you want with
```bash
bazel run //third_party:requirements.update
```

# node_modules management
version
```bash
bazel run @pnpm//:pnpm -- --version
```
add the react-spinners module (may need to run bazel run @pnpm//:pnpm install for it to be linked?)
```bash
bazel run @pnpm//:pnpm -- --dir $PWD add react-spinners -D
```
install modules
```bash
bazel run @pnpm//:pnpm install
```

# node library and web app
```bash
bazel run projects/node_web
```
http://localhost:8080/

# js lib compiled with closure-compiler 
at the moment just test invocation of closure compiler
```bash
bazel build projects/closure_lib
```

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
