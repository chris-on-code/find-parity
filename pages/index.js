import Head from "next/head";
import CountrySearch from "../components/CountrySearch";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Find Parity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-2">
        <div>
          <h2>Find Parity</h2>
          <p>
            A simple tool to calculate the discount your country should get on
            products that offer <a href="#">purchasing power parity</a>.
          </p>
        </div>
        <div>
          <CountrySearch />
        </div>
      </main>
    </div>
  );
}
