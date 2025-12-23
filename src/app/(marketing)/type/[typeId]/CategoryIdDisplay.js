"use client";
import { useParams } from "next/navigation";

export default function CategoryIdDisplay() {
  const params = useParams();
  const { typeId } = params;
  return <h1>Type ID: {typeId}</h1>;
}
