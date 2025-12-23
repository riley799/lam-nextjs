"use client";
import React from "react";
export default function ClientComponent({ nonSerializableProp }) {
  console.log("ClientComponent received prop:", nonSerializableProp);
  return (
    <div>
      <h2>Client Component</h2>
      <p>Attempting to render non-serializable prop:</p>
      {/* This will likely cause an error or not render as expected */}
      <p>
        {nonSerializableProp
          ? nonSerializableProp.toString()
          : "Prop is null or undefined"}
      </p>
    </div>
  );
}
