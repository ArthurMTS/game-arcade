import { Header, GameCard } from "@/components";

export function Home() {
  return (
    <>
      <Header />
      <main className="bg-slate-900 ml-20 min-h-screen flex flex-col items-center">
        <h1 className="mt-4 text-2xl font-mono text-slate-50">
          Choose a game and have fun!
        </h1>
        <div className="m-4 flex items-center justify-center flex-wrap gap-4">
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </main>
    </>
  );
}
