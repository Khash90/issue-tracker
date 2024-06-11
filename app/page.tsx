
import Pagination from "./components/Pagination";
import LatestIssues from "./LatestIssues";

export default function Home() {
  return (
    //  <LatestIssues />
    <Pagination itemCount={100} pageSize={10} currentPage={10} />
  );
}
