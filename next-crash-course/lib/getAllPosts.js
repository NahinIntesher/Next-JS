export default async function getAllPosts() {
  const result = await fetch(
    // "https://jsonplaceholder.typicode.com/posts?_limit=10",
    "http://localhost:3001/postsAPI",
    {
      next: {
        revalidate: 5,
      },
    }
  );
  return result.json();
}
