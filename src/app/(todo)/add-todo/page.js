"use client";

import styles from "./add-todo.module.css";
import { addTodo } from "./action";
import { useActionState, useEffect } from "react";

export default function AddTodoPage() {
  const [state, formAction] = useActionState(addTodo, {
    message: null,
    success: null,
  });
  console.log(state);

  useEffect(() => {
    if (state.success) {
      alert(state.message);
    } else if (state.success === false && state.message) {
      alert(state.message);
    }
  }, [state]);
  return (
    <div className={styles.container}>
      <h1>Add Todo</h1>
      <form action={formAction} className={styles.formContainer}>
        <label htmlFor="todo" className={styles.label}>
          Tên công việc: {""}
        </label>
        <input
          type="text"
          id="todo"
          name="todo"
          required
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          Add
        </button>
      </form>
    </div>
  );
}
