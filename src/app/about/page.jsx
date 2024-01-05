'use client'
import Link from "next/link"

async function getData(){
  const req = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await req.json()

  return data
}
 async function About() {

  const data = await getData()
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-10">
      <h1 className="text-3xl">About</h1>
      <ul className="flex flex-col items-center gap-3 overflow-y-scroll max-w-[1000px] h-[400px] p-8">
        {data.map(todo =>{
        const {id, title, completed} = todo
          return <li className="border px-5 py-3 rounded-md w-full flex flex-col md:flex-row md:gap-0 gap-2 items-center justify-between" key={id}>
            <h3 className="text-xl font-bold">Title:<span className="text-md font-medium ml-2">{title}</span></h3>
            <Link className="px-4 py-3 bg-green-700 text-white rounded-md" href={`/about/${id}`}>Read more ➡</Link>
          </li>
        })}
      </ul>
    </div>
  );
}

export default About;
