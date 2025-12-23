"use client";
import { useState } from "react";
import styles from "./log-message.module.css";
import { logClientMessage } from "./action";

export default function LogMessagePage() {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleSendMessage = async (messageContent) => {
    setIsLoading(true);
    setResponse(null);

    try {
      const result = await logClientMessage(messageContent);
      if (result.success) {
        setResponse({ type: "success", message: result.message });
      } else {
        setResponse({ type: "error", message: result.message });
      }
    } catch (error) {
      setResponse({ type: "error", message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log Message</h1>
      <p className={styles.description}>
        This page logs a message to the console.
      </p>
      <button onClick={() => handleSendMessage("Hello")}>Log Message</button>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {response && (
        <div>
          <p>Response: {response.message}</p>
        </div>
      )}
    </div>
  );
}
