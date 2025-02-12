import Link from "next/link";
import About from "./about/page";
import Components from "./components/page";
import Layout from "./layout/layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Link href={"/components"}>
        <Button>Components</Button>
      </Link>
      <Link href={"/about"}>
        <Button>About</Button>
      </Link>
      <Layout>TESTING</Layout>
    </>
  );
}
