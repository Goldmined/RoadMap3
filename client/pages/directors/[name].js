import { useRouter } from "next/router";
import MovieLayout from "../../components/layout/Movie"

const DirectorPage = () => {
  const router = useRouter();
  const name = router.query.name;
  return <MovieLayout>{name}</MovieLayout>
};

export default DirectorPage;
