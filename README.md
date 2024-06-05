# ivobos-bazel-monorepo
Sandbox monorepo setup with nix+bazel (but not bzlmod). It has python, react, go and other hello-world style apps.

# nix setup
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

