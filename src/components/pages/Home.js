import { ListGroup, Button } from "react-bootstrap";
import { getAllTables } from "../../redux/store";
import { useSelector } from "react-redux";
import SingleTable from "../views/SingleTable";
import { Link } from "react-router-dom";

const Home = () => {

  const allTables = useSelector(getAllTables);
  console.log(allTables );
  return (
  <>

      <h1>All tables</h1>
      <ListGroup>
        {allTables.map(table => <SingleTable key={table.id} {...table} />)}
        {/* {allTables.map(table =>
          <ListGroup.Item key={table.id} {...table} className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <h2 className="fw-bold px-3">Table {table.id} </h2>
              <h4 className="px-3"><span className="fw-bold">Status:</span> {table.status}</h4>
            </div>
            <Link to={`/table/${table.id}`}>
              <Button type="button class">show more</Button>
            </Link>
          </ListGroup.Item>)} */}
      </ListGroup>
  </>
  )

}

export default Home;