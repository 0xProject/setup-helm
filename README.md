# setup-helm

Install [helm](https://helm.sh/).

## Example

```yaml
name: helm

on:
  pull_request:
    branches:
      - main

env:
  CHARTPATH: charts/foo

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: 0xProject/setup-helm@v1
        with:
          version: 3.10.1
      - run: helm lint ${{ env.CHARTPATH }}
      - run: helm template ${{ env.CHARTPATH }}
```
