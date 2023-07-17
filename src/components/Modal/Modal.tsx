import "./Modal.css";

import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useAppSelector";
import { Actions, TodoStatus } from "../../redux/redusers/AppReducer/types";
import { Dropdown, DropdownOption } from "../Dropdown/Dropdown";

import { addCardOptions } from "./addCardOptions";
import { Button } from "../Button/Button";

export interface ModalProps {
  active: boolean;
  setActive: (newState: boolean) => void;
}

export const Modal = () => {
  const dispatch = useDispatch();

  const isTaskModalActive = useTypedSelector(
    (state) => state.isTaskModalActive
  );

  const [idCounter, setIdCounter] = useState(1);
  const [title, setTitle] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<TodoStatus>(
    TodoStatus.Incompleted
  );
  const [isTitleValid, setIsTitleValid] = useState(true);

  const onFinish = useCallback(
    (e: any) => {
      e.preventDefault();
      dispatch({ type: Actions.CLOSE_TASK_MODAL });
    },
    [isTaskModalActive]
  );

  const onAddTask = () => {
    if (!title) {
      setIsTitleValid(false);
      return;
    }

    const data = {
      id: idCounter,
      title: title,
      status: selectedStatus,
      createdAt: new Date(),
    };

    setIdCounter((prevIdCounter) => prevIdCounter + 1);
    setTitle('');

    dispatch({ type: Actions.CLOSE_TASK_MODAL });
    dispatch({ type: Actions.ADD_TODO, payload: data });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsTitleValid(true);
  };

  const handleDropdownChange = (option: DropdownOption) => {
    const status = option.value as keyof typeof TodoStatus;
    setSelectedStatus(TodoStatus[status]);
  };

  return (
    <div
      className={isTaskModalActive ? "modal active" : "modal"}
      onClick={onFinish}
    >
      <div
        className={
          isTaskModalActive ? "modal__content active" : "modal__content"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <p>Add Task</p>
        <label>Title</label>

        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className={!isTitleValid ? "invalidInput" : ""}
        ></input>
        {!isTitleValid && <p className="invalidTitle">Please enter a title</p>}
        <label>Status</label>
        <Dropdown
          options={addCardOptions}
          defaultValue={addCardOptions[1]}
          onChange={handleDropdownChange}
        />

          <Button text='Add Task'onClick={onAddTask}/>
      </div>
    </div>
  );
};
