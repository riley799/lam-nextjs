const BASE_URL = "https://letdiv.vercel.app"; // thay bằng domain thật khi triển khai.

export default async function sitemap() {
  const res = await fetch(`${BASE_URL}/api/posts`);
  const posts = (await res.text()) || [];

  //   // Tao URL cho moi bai viet
  //   const postUrls = posts.map((post) => ({
  //     url: `${BASE_URL}/api/posts/${post.slug}`,
  //     lastModified: new Date(post.lastModified),
  //   }));

  // ket hop cac trang tinh (trang chu, gioi thieu) voi cac trang dong
  //   return [
  //     {
  //       url: BASE_URL,
  //       lastModified: new Date(),
  //     },
  //     {
  //       url: `${BASE_URL}/about`,
  //       lastModified: new Date(),
  //     },
  //     ...postUrls,
  //   ];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
  ];
}
