import { Main } from "@/components";

interface GameHomeProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function Home({ title, description, children }: GameHomeProps) {
  return (
    <Main className="justify-center">
      <h2 className="font-mono text-4xl text-slate-950 dark:text-slate-50">{title}</h2>
      <p className="text-xl text-justify w-96 my-4 text-slate-900 dark:text-slate-100">
        {description}
      </p>

      {children}
    </Main>
  );
}
