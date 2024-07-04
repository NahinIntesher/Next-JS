import Button from "@/app/components/Button"; 
import Image from "next/image";
import thumb from "@/public/images/thumb.jpg";

export default function MissionPage() {
  return (
    <main className="mt-10 p-5"> 
      <div>
        <h1>Mission Page</h1>
        <br />
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
          dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit
          amet, consectetur adipiscing elit. lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

     
      <Image src={thumb} alt="Thumb Image" width="500" height="500" className="mt-10"/>

      <Button />
    </main>
  );
}
