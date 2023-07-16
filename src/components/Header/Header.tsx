import './Header.css';

import React,{FC} from 'react'
  import { useDispatch } from 'react-redux';

import { Button } from '../Button/Button';
import { Actions, TodoStatus } from '../../redux/redusers/AppReducer/types';
import { Dropdown, DropdownOption } from '../Dropdown/Dropdown';
import { filterOptions } from './filterOptions';

interface HeaderProps { 
    onChange: (option: DropdownOption) => void;
}

export const Header:FC<HeaderProps> = React.memo(({onChange }) => {
    const dispatch = useDispatch()

    const onAddTask = () => {
        dispatch({type:Actions.OPEN_TASK_MODAL})
    }

    const handleDropdownChange = (option: DropdownOption) => {
      const status = option.value as keyof typeof TodoStatus;
      onChange(option); 
    };

    return <header>
        <div className='title'>todo list</div>
        <div className='control-panel'>
        <Button text='Add Task' onClick={()=> onAddTask()}/>
        <Dropdown options={filterOptions} defaultValue={filterOptions[0]} onChange={handleDropdownChange}/>
        </div>
    </header>
})