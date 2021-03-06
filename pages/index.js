import Head from "next/head";
import CountrySearch from "../components/CountrySearch";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-900">
      <div className="px-8 lg:max-w-7xl mx-auto">
        <Head>
          <title>Find Parity</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="grid lg:grid-cols-2 gap-20">
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
    </div>
  );
}
