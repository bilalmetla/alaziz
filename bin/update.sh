#!/usr/bin/env bash

cd ../

git stash
git pull
git stash apply

sleep 10