export async function logClientMessage(message) {
  console.log(message);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true, message: "Message logged successfully" };
}
