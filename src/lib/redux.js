import { createStore } from "redux";

export const actions = {
  ARCHIVE_TASK: "ARCHIVE_TASK",
  PIN_TASK: "PIN_TASK",
};

export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer("ARCHIVE_TASK")(state, action);
    case actions.PIN_TASK:
      return taskStateReducer("PIN_TASK")(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  { id: "1", title: "something", state: "TASK_INBOX" },
  { id: "2", title: "something more", state: "TASK_INBOX" },
  { id: "3", title: "something also", state: "TASK_INBOX" },
  { id: "4", title: "something again", state: "TASK_INBOX" },
];

export default createStore(reducer, { tasks: defaultTasks });
