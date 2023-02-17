import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={4}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={4}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col sx={4}>
      <Link to={`/favourite`}>
        <Button
          onClick={() => {
            dispatchEvent({
              type: "AGGIUNGI_AI_PREFERITI",
              payload: data,
            });
          }}
        >
          {" "}
          Aggiungi ai preferiti
        </Button>
      </Link>
    </Col>
  </Row>
);

export default Job;
