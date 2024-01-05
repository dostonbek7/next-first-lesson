import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen pt-10 px-10">
      <h1 className="text-5xl text-center text-green-900 mb-5">Hello</h1>
      <p className="text-lg mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        consequatur sit quod, obcaecati repellat voluptates ipsum cum. Sint, ad!
        Beatae rem ipsa recusandae aspernatur mollitia nam error fugit autem
        vitae illum accusamus assumenda aut soluta iusto incidunt praesentium
        quae dolores dolor molestias culpa, rerum vero veniam at sed?
        Aspernatur, tempora.
      </p>
        <Link
          className="bg-green-900 text-white px-8 py-4 rounded-lg"
          href="/about"
        >
          About
        </Link>
    </main>
  );
}
