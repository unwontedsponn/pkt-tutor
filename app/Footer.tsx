export default function Footer() {
  return (
    <footer className="w-full bg-indigo-600 text-white p-6 text-center text-sm">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Pocket Tutor. All rights reserved.</p>
        <nav className="mt-2 md:mt-0">
          <a href="#" className="hover:underline mx-2">Privacy Policy</a>
          <a href="#" className="hover:underline mx-2">Terms of Use</a>
          <a href="#" className="hover:underline mx-2">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
