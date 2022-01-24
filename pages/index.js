import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";

export default function Home() {
  return (
    <ContainerBlock
      title="Laud Gilbert - Software Engineer"
      description="Doing Good with Tech"
    >
      {<Hero />}
      <FavouriteProjects />
      <LatestCode />
    </ContainerBlock>
  );
}
