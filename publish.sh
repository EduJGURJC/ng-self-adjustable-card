#!/bin/bash
npm run build
cp package.json dist && cp README.md dist && cp .npmignore dist
sed -i 's/dist\/index.js/index.js/g' ./package.json
cd dist
npm publish
