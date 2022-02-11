---
sidebar_position: 1
---

# Create a Container

`code goes here`

## Abother title

`more code goes here`

# Build & Deploy to GitHub Pages

```
name: Build and GH-Page Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      - name: Install
        run: yarn install

      - name: Build
        run: |
          yarn autoclean
          yarn build

      - name: Deploy to GH Page
        uses: JamesIves/github-pages-deploy-action@v4.2.3
        with:
          branch: gh-pages
          folder: build

```
