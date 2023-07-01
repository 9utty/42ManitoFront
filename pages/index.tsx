import Image from "next/image";
import { Inter } from "next/font/google";
import AppLayout from "./global/AppLayout";
import Manito from "./Manito";
import Category from "./Category";
import Search from "./Search";
import Login from "./login/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Manito />
    </div>
  );
}
