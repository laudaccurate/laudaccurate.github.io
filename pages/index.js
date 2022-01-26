import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import getLatestRepos from "../lib/getLatestRepos";
import userData from "../constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Laud Gilbert - Software Engineer"
      description="Doing Good with Tech"
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export async function getStaticProps() {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
}
