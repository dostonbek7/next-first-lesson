import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen text-center pt-10">
      <h1 className="text-5xl text-green-900 mb-5">Hello</h1>
      <p className="text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        consequatur sit quod, obcaecati repellat voluptates ipsum cum. Sint, ad!
        Beatae rem ipsa recusandae aspernatur mollitia nam error fugit autem
        vitae illum accusamus assumenda aut soluta iusto incidunt praesentium
        quae dolores dolor molestias culpa, rerum vero veniam at sed?
        Aspernatur, tempora.
      </p>
      <Link className="underline decoration-red-800 decoration-solid" href="/about">About</Link>
    </main>
  );
}
