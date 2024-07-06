import dbConnect from "@/lib/dbConnect";

export default function Home() {
  dbConnect();
  return <h1 className="">Hei I am Nahin Intesher</h1>;
}
