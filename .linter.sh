#!/bin/bash
cd /home/kavia/workspace/code-generation/taskflow-96076-142314c9/task_manager_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

