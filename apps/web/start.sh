#!/bin/bash
set -e

echo "Starting GIGECONOMY OS on port ${PORT:-3000}"
npx serve dist -l ${PORT:-3000} -s
