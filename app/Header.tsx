export default function Header() {
  return (
    <header className="w-full bg-indigo-600 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">🎵 Pocket Tutor</h1>
        <nav>
          <a href="#" className="text-white hover:underline">About</a>
        </nav>
      </div>
    </header>
  );
}