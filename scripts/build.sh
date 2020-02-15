#!/usr/bin/env bash

set -e

rm -Rf dist

npm run build

cp ./.npmignore dist/
cp ./package.json dist/
cp ./AUTHORS dist/
cp ./LICENSE dist/
cp ./README.md dist/
