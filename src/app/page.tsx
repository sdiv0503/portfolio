export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center space-y-10 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Layout System Ready
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          The Navbar is active. The Footer is active. Dark mode is functional.
          We are ready for the Hero Section.
        </p>
      </div>
    </section>
  );
}