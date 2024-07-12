import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/medmar.png"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />

      <h2 className="mb-3 text-2xl font-semibold">Medmar Agence </h2>
      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        Notre agence digitale répond aux problématiques de marketing et de
        communication{" "}
      </p>
    </main>
  );
}
