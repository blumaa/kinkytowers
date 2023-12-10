import Moon from "./components/Moon/Moon";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-sky-900 h-screen">
      <div className="w-1/4">
        <Moon />
      </div>
    </main>
  );
}
