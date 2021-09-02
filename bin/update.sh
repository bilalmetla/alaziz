#!/usr/bin/env bash

cd ../

git stash
git pull
git unstash

sleep 10