import './App.css';
import { FaNetflix } from "react-icons/fa";

const logo = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-black text-white">
      <FaNetflix className="text-red-600 text-2xl" />
      <button className="bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700">
        Menu
      </button>
    </div>
  );
};

export default logo;
