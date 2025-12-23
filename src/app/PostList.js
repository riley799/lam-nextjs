"use client";
import { useRef } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setPosts } from "@/redux/slices/posts.slice";
export default function PostsList({ initialPosts }) {
  // Lấy hàm dispatch từ Redux store.
  const dispatch = useAppDispatch();
  // Sử dụng useRef để đảm bảo logic khởi tạo chỉ chạy một lần.

  const initialized = useRef(false);
  /**
* Nếu component chưa được khởi tạo, dispatch dữ liệu bài viết ban đầu vào store.
* Lưu ý: logic này là đồng bộ, sau dòng dispatch data đã được cập nhật vào store ngay (Tại vì component ch
ưa đc khởi tạo).
*/
  if (!initialized.current) {
    dispatch(setPosts(initialPosts));
    initialized.current = true;
  }
  // Lấy danh sách bài viết từ Redux store.
  const posts = useAppSelector((state) => state.posts.list);
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
