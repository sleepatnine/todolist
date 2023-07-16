import "./Card.css";

import trashIcon from '../../img/trash-svgrepo-com.svg';
import editIcon from '../../img/edit-svgrepo-com.svg';
import saveIcon from '../../img/tick-circle-svgrepo-com.svg'
import cancelIcon from '../../img/cancel-svgrepo-com.svg'

import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import ICardProps from "./types";

import { Actions, TodoStatus } from "../../redux/redusers/AppReducer/types";

export const Card: FC<ICardProps> = React.memo(
  ({ id, title, status, createdAt }) => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newCheckedValue = event.target.checked;
      setChecked(newCheckedValue);
      const newStatus = newCheckedValue
        ? TodoStatus.Completed
        : TodoStatus.Incompleted;
      dispatch({ type: Actions.MARK_TODO, payload: { id, status: newStatus } });
    };

    const onDeleteTask = () => {
      dispatch({ type: Actions.DELETE_TODO, payload: id });
    };

    const onEditTask = () => {
      setIsEditing(true);
    };

    const onSaveTask = () => {
      if (editedTitle !== title) {
        dispatch({
          type: Actions.EDIT_TODO,
          payload: { id, title: editedTitle },
        });
      }
      setIsEditing(false);
    };

    const onCancelEdit = () => {
      setIsEditing(false);
      setEditedTitle(title);
    };

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setEditedTitle(event.target.value);
    };

    useEffect(() => {
      setChecked(status === TodoStatus.Completed); 
    }, [status]);

    return (
      <div className="card">
        <div className="card__status">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
            id={`checkMark-${id}`}
          />
          <label htmlFor={`checkMark-${id}`}></label>

          {isEditing ? (
            <div className="card__title">
              <input
                type="text"
                value={editedTitle}
                onChange={handleTitleChange}
              />
              <p className="title__date">{createdAt.toISOString()}</p>
            </div>
          ) : (
            <div className="card__title">
              <p className={`title__main ${checked ? "strikethrough" : ""}`}>{title}</p>
              <p className="title__date">{createdAt.toISOString()}</p>
            </div>
          )}
        </div>

        <div className="card__commands">
          <button onClick={onDeleteTask}><img src={trashIcon} alt="Delete" /></button>
          {isEditing ? (
            <>
              <button onClick={onSaveTask}><img src={saveIcon} alt="Save"/></button>
              <button onClick={onCancelEdit}><img src={cancelIcon} alt="Cancel"/></button>
            </>
          ) : (
            <button onClick={onEditTask}><img src={editIcon} alt="Edit" /></button>
          )}
        </div>
      </div>
    );
  }
);
