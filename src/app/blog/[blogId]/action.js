"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function revalidateProductPath(formData) {
  const path = formData.get("path");
  console.log(path);
  if (path) {
    revalidatePath(path);
    console.log("Revalidated path:", path);
    redirect(path);
  }
}
