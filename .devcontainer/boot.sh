#!/usr/bin/env bash
set -e

pnpm install
pnpm store prune
