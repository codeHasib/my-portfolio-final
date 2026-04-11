import data from "@/public/data/personalInfo.json";

export default async function Home() {
  const res1 = await fetch("/data/personalInfo.json");
  const data = await res1.json();
  console.log(data)
  return <div>

  </div>;
}
