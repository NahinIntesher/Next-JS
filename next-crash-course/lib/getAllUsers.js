export default async function getAllUsers(){
  
  const result = await fetch("http://localhost:3000/api");

  return result.json();
}