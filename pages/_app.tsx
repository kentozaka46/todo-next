import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

export const TodoListContext = createContext(
  {} as {
    todoList: string[];
    setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
  }
);

function MyApp({ Component, pageProps }: AppProps) {
  const [todoList, setTodoList] = useState<string[]>(["ToDoです。"]);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      <Component {...pageProps} />
    </TodoListContext.Provider>
  );
}

export default MyApp;
