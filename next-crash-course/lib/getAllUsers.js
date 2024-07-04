export default async function getAllUsers() {
  const result = await fetch("http://localhost:3001/postsAPI");
  return result.json();
}
