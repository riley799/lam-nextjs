"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/redux/store";
export default function StoreProvider({ children }) {
  /**
   * Sử dụng useRef để đảm bảo Redux store chỉ được tạo một lần
   * khi component này được render lần đầu tiên trên client.
   */
  const storeRef = useRef(null);
  /**
   * Tạo store mới nếu chưa có.
   * `makeStore()` tạo store mới cho mỗi request trên server.
   * `storeRef.current` đảm bảo trên client, store chỉ khởi tạo một lần
   * để duy trì trạng thái và tránh lỗi hydration.
   */
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  /**
   * Cung cấp Redux store cho các component con.
   */

  return <Provider store={storeRef.current}>{children}</Provider>;
}
