import Image from "next/image";
import { Inter } from "next/font/google";
import AppLayout from "./global/components/AppLayout";
import Mento from "./mentor/Mentor";
import Manito from "./home/Manito";
import Category from "./category/Category";
import Search from "./search/Search";
import Login from "./login/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Manito />
    </div>
  );
}
