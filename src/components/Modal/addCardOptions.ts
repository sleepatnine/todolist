import { TodoStatus } from "../../redux/redusers/AppReducer/types";
import { DropdownOption } from "../Dropdown/Dropdown";

export const addCardOptions: DropdownOption[] = [
    {
      value: TodoStatus.Completed,
      label: TodoStatus.Completed,
    },
    {
      value: TodoStatus.Incompleted,
      label: TodoStatus.Incompleted,
    },
  ];