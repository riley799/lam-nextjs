"use server"; // Đây là đánh dấu cho việc tạo  server action

export async function addTodo(prevState, formData) {
  const todo = formData.get("todo");
  console.log(todo);

  if (!todo || todo.trim() === "") {
    return { success: false, message: "Todo is required" };
  }

  // Trong ứng dụng thực tế, sẽ lưu 'todo' vào database (PostgreSQL, MongoDB,...)
  // hoặc gởi 1 API backend
  // vd: await db.collection('todo').insertOne(text: todo, completed: false})
  // Giả lập độ trễ

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true, message: `Todo added ${todo} successfully` };
}
