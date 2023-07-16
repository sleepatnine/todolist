export interface TodoItem {
    id: number;
    title: string; 
    status: TodoStatus; 
    createdAt: Date;
}

export interface TodosState{
    TodosState: any
    todoItems: Array<TodoItem>
    isTaskModalActive: boolean;

}

export enum TodoStatus {
  Completed = 'Completed',
  Incompleted = 'Incompleted',
}

export enum Actions {
  ADD_TODO = "ADD_TODO",
  EDIT_TODO = "EDIT_TODO",
  MARK_TODO = "MARK_TODO",
  DELETE_TODO = "DELETE_TODO",
  OPEN_TASK_MODAL = "OPEN_TASK_MODAL",
  CLOSE_TASK_MODAL = "CLOSE_TASK_MODAL",
}

interface AddTodoAction {
  type: Actions.ADD_TODO;
  payload: TodoItem;
}

interface DeleteTodoAction {
  type: Actions.DELETE_TODO;
  payload:number;
}

interface EditTodoAction {
    type:Actions.EDIT_TODO;
    payload: TodoItem;
}

interface MarkTodoAction {
    type:Actions.MARK_TODO;
    payload: TodoItem;
}

interface OpenTaskModalAction {
    type:Actions.OPEN_TASK_MODAL;
    payload:TodosState;
}

interface CloseTaskModalAction {
    type:Actions.CLOSE_TASK_MODAL;
    payload:TodosState;
}

export type TodoAction = AddTodoAction | DeleteTodoAction | EditTodoAction| MarkTodoAction| OpenTaskModalAction| CloseTaskModalAction;
