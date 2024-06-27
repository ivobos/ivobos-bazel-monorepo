# ivobos-bazel-monorepo
Sandbox monorepo setup with nix+bazel (but not bzlmod). 

# nix setup
Setup nix to get bazel, python and other build tools

## Install nix 
from https://nixos.org/download/

## Install direnv and configure
```
brew install direnv
```
Hook direnv into shells as per https://direnv.net/docs/hook.html

## enable flakes
```
sudo vi /etc/nix/nix.conf
```
Add following:
```
experimental-features = flakes nix-command
```

## enable flake first time 
first time you will have to enable the nix flake
```
cd ~/src/ivobos-bazel-monorepo
direnv allow
```

## now you can build everything with
```bash
bazel build //...
```

# demo apps based on these tutorials https://www.youtube.com/@KrisFoster1
It has python, react, go and other hello-world style apps.
See [README.md](./projects/README.md)


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
find your module names with
```bash
bazel query '//...'
```

# js lib compiled with closure-compiler 
at the moment just test invocation of closure compiler
```bash
bazel build projects/closure_lib
```
