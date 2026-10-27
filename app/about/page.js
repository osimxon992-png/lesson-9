import Image from "next/image";

function page() {
  return (
    <div>
      <h1>About Page</h1>
      <Image src={"/globe.svg"} width={100} height={50} />
    </div>
  );
}

export default page;
