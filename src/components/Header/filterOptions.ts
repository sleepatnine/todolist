import { TodoStatus } from "../../redux/redusers/AppReducer/types";
import { DropdownOption } from "../Dropdown/Dropdown";

export const filterOptions: DropdownOption[] = [
    {
      value: "all",
      label: "All",
    },
    {
      value: TodoStatus.Completed,
      label: TodoStatus.Completed,
    },
    {
      value: TodoStatus.Incompleted,
      label: TodoStatus.Incompleted,
    },
  ];