/* import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const FavIndicator = () => {
  const navigate = useNavigate();

  const favJobsLength = useSelector((state) => state.favJobs.content.length);

  return (
    <>
      <Button onClick={() => navigate("/favourite")}>Favoriti</Button>
      <span className="ml-2">{favJobsLength}</span>
    </>
  );
};

export default FavIndicator;
 */
