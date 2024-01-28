import Latest from "./components/news/latest";
import Popular from "./components/news/popular";
import Comment from "./utility/comment";
async function getData() {
  const res = await fetch(`${process.env.HOST}/api/news_list/get`)
  const data = await res.json();
  return data;
}



export default async function Home() {
  const datas=await getData();
  return (
    
     <Latest data={datas['data']} name='Latest' />
   
  )
}
