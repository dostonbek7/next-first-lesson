import Link from "next/link";

async function getData(id) {
  const req = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await req.json();
  return data;
}

export default async function Page({ params }) {
  const data = await getData(params.id);
  return(
    <div className="h-full w-full flex justify-center items-center">
    <div className="border rounded-md p-5 w-[300px]">
      <h2 className="mb-2 text-lg">Title: {data.title}</h2>
      <h4 className="mb-4 text-lg">Completed: {data.completed ? '✅' : '❌'}</h4>
      <Link className="bg-orange-500 text-white px-5 py-3 rounded-md" href="/about">⬅ Back</Link>
    </div>
    </div>
  )
}
