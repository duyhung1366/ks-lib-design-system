#!/bin/bash
host=$1
path=$2

# Check if host is empty
if [ -z "$host" ]; then
  echo "Host is empty. Please provide a valid host."
  exit 0
fi

# Check if path is empty
if [ -z "$path" ]; then
  echo "Path is empty. Please provide a valid path."
  exit 0
fi

rm -rf storybook-static/;
npm run build-storybook;
echo "Builded";
yes | scp -r storybook-static/ "root@$host:$path"
