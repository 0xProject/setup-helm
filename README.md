# setup-helm

Install [helm](https://helm.sh/).

## Example

```yaml
name: helm

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-go@v3
      - uses: actions/checkout@v3
      - uses: 0xProject/setup-helm@v1
```
