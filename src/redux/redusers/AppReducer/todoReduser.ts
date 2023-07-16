import { Actions, TodoAction, TodoItem, TodosState } from "./types";

const initialState: TodosState = {
  todoItems: [],
  isTaskModalActive: false,
  TodosState: undefined
};

export const todoReduser = (
  state = initialState,
  action: TodoAction
): TodosState => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload],
      };

    case Actions.EDIT_TODO: 
    const updateTodo = state.todoItems.map((todo) => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          title: action.payload.title
        };
      }
      return todo;
    });

    return {
      ...state,
      todoItems: updateTodo
    };

    case Actions.MARK_TODO:
      const updatedTodoItems = state.todoItems.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            status: action.payload.status
          };
        }
        return todo;
      });

      return {
        ...state,
        todoItems: updatedTodoItems
      };

    case Actions.DELETE_TODO:
      return { 
        ...state, 
        todoItems: state.todoItems.filter(todoItem => todoItem.id !== action.payload)
      }

    case Actions.OPEN_TASK_MODAL:
      return {
        ...state,
        isTaskModalActive: true,
      };
    case Actions.CLOSE_TASK_MODAL:
      return {
        ...state,
        isTaskModalActive: false,
      };

    default:
      return state;
  }
};
