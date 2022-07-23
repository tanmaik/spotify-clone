import Head from "next/head";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <div>{/* Player */}</div>
    </div>
  );
};

export default Home;
