import { Main } from "@/components";

interface GameHomeProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function Home({ title, description, children }: GameHomeProps) {
  return (
    <Main className="justify-center">
      <h2 className="font-mono text-4xl text-slate-50">{title}</h2>
      <p className="text-slate-100 text-xl text-justify w-96 my-4">
        {description}
      </p>

      {children}
    </Main>
  );
}
