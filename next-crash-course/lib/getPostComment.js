export default async function getPostComment(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments?_limit=3`);
  // if (!result.ok) {
  //   throw console.error("Failed to fetch comments");
  // }
  return result.json();
}
