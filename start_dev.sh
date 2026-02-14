#!/bin/bash

# Function to kill background processes on exit
cleanup() {
    echo "Stopping servers..."
    kill $(jobs -p) 2>/dev/null
}
trap cleanup EXIT

echo "=== Elena Dev Environment ==="
echo "Starting Backend Worker..."
make dev-worker &
WORKER_PID=$!

echo "Starting Frontend..."
make dev-frontend &
FRONTEND_PID=$!

echo "Backend PID: $WORKER_PID"
echo "Frontend PID: $FRONTEND_PID"
echo "Press Ctrl+C to stop both servers."

wait $WORKER_PID $FRONTEND_PID
