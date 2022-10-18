import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom';
import Header from './components/views/Header';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import SingleTable from './components/views/SingleTable';
import Footer from './components/views/Footer';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react';
import InsideSingleTable from './components/views/InsideSingleTable';
// import tables from './redux/initialState';

function App() {

  const dispatch = useDispatch();


  useEffect(() => dispatch(fetchTables()), [dispatch]);


  return (
    <Container>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:id" element={<InsideSingleTable/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </Container>
  );
}

export default App;
