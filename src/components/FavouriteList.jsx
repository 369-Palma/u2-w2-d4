import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const FavouriteList = () => {
  const myFavList = useSelector((state) => state.favJobs.content);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ul>
            {myFavList.map((fav, i) => (
              <>
                <li key={i}> {fav.title}</li>
                <Button
                  className="text-bg-danger"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_FAV",
                      payload: fav,
                    })
                  }
                >
                  X
                </Button>
                <Link to={"/" + fav}>{fav}</Link>
              </>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FavouriteList;
