import { userAgent } from "next/server";
import sitemap from "./sitemap";

const BASE_URL = "http://localhost:3001";

export default async function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/private"], //chặn không cho bot vào các path trong array.
    },

    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
