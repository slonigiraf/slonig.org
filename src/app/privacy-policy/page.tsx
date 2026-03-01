import Navbar from "../Navbar";

import Footer from "../Footer";


export default async function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <Footer />
    </main>
  );
}