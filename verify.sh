#!/bin/bash
set -e

echo "=== Elena Verification Script ==="
echo "Running cargo check and cargo test for the entire workspace..."

make check

echo "✅ Verification Succeeded! All checks and tests passed."
