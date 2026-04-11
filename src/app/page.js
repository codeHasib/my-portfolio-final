import data1 from "@/data/personalInfo.json";
import data2 from "@/data/portfolioData.json";

export default async function Home() {
  return <div>
    {
      data1.blogs.map((item, ind)=> <img src={item.image} key={ind}></img>)
    }
    {
      data2.skills.frontend.map((item,ind)=> <img src={item.icon} key={ind}></img>)
    }
  </div>;
}
