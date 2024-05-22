import './App.css';
import Nav from './components/nav/NavBar'
import Home from './components/home/Home';
import Program from './components/program/Program';
import Member from './components/member/Member'
import Classess from './components/classess/Classess'
import ExpertSystem from './components/expertSystem/ExpertSystem';
import Map from './components/map/Map';
import Footer from './components/footer/Footer';
import BookNow from './components/bookNow/BookNow'
function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Program />
      <Member />
      <Classess />
      <ExpertSystem />
      <Map />
      <BookNow />
      <Footer />
    </div>

  );
}

export default App;
