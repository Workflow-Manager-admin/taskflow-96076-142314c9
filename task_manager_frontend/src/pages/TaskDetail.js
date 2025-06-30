import React from 'react';
import { useParams } from 'react-router-dom';

// PUBLIC_INTERFACE
function TaskDetail() {
  /** TaskDetail page that shows info for a single task. */
  const { taskId } = useParams();

  return (
    <div className="container">
      <h2>Task Detail</h2>
      <p>Viewing details for task ID: <b>{taskId}</b></p>
      <p>(UI not implemented yet.)</p>
    </div>
  );
}

export default TaskDetail;
