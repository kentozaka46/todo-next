import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>(["ToDoです。"]);
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDo一覧</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>ToDoアプリ</h1>

        <div>
          <input
            type="text"
            placeholder="ToDo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => {
              setTodoList([...todoList, text]);
              setText("");
            }}
          >
            追加
          </button>
        </div>

        <h2>ToDo一覧</h2>

        <div>
          <ul>
            {todoList.map((todo, index) => {
              return (
                <li key={index}>
                  <Link
                    as={"/detail"}
                    href={{ pathname: "/detail", query: { title: todo } }}
                  >
                    <p>{todo}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
