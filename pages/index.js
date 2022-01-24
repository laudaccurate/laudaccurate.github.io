import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";

export default function Home() {
  return (
    <ContainerBlock
      title="Manu Arora - Developer, Writer, Creator"
      description="Building a template with Next.js and Tailwindcss - for FreeCodeCamp users."
    >
      {/* <Hero />
      <FavouriteProjects />
      <LatestCode /> */}
    </ContainerBlock>
  );
}
