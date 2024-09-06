// components/Layout.js
export default function Layout({ children }) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-500 p-4 text-white">CRM Dashboard</header>
        <main className="flex-1 p-6">{children}</main>
        <footer className="bg-blue-500 p-4 text-white text-center">© 2024</footer>
      </div>
    );
  }
  