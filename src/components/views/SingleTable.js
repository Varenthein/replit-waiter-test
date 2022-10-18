
import { ListGroup,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleTable = (props) => {

  const { id } = useParams();
  return (

    <ListGroup.Item  className="d-flex flex-row justify-content-between">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <h2 className="fw-bold px-3">Table {props.id}</h2>
        <h4 className="px-3"><span className="fw-bold">Status:</span> {props.status}</h4>
      </div>
      <Link to={`/table/${props.id}`}>
        <Button type="button class">show more</Button>
      </Link>
    </ListGroup.Item>
  )
}

export default SingleTable;