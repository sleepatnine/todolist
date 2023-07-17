import "./App.css";

import {  useCallback, useEffect, useMemo, useState } from "react";

import { Container } from "./layouts/Container/Container";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";
import { Card } from "./components/Card/Card";
import { useTypedSelector } from "./hooks/useAppSelector";
import { DropdownOption } from "./components/Dropdown/Dropdown";

function App() {
  const todosList = useTypedSelector((state) => state.todoItems);
  const [selectedFilter, setSelectedFilter] = useState<DropdownOption | null>(null);

  const handleFilterChange = useCallback((option: DropdownOption) => {
    setSelectedFilter(option);
  }, [setSelectedFilter]);

  useEffect(() => {
    const storedTodosList = localStorage.getItem("todosList");
    if (storedTodosList) {
      setSelectedFilter(null);      
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todosList', JSON.stringify(todosList));
  }, [todosList]);

  const filteredCards = useMemo(() => {
    if (selectedFilter) {
      return todosList.filter((todo) => {
        if (selectedFilter.value === "all") {
          return true; 
        } else {
          return todo.status === selectedFilter.value; 
        }
      });
    } else {
      return todosList;
    }
  }, [selectedFilter, todosList]);

  return (
    <>
      <Modal />
      <Container>
        <Header onChange={handleFilterChange}/>
        <div className="list">
          {filteredCards.length > 0 ? (
            filteredCards.map((todo) => (
              <Card
                key={todo.id}
                id={todo.id}
                title={todo.title}
                status={todo.status}
                createdAt={todo.createdAt}
              />
            ))
          ) : (
            <div className="empty-list">No Todo Found</div>
          )}
          </div>
      </Container>
    </>
  );
}

export default App;
