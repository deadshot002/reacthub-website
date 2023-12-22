import './App.css';
import Nav from './componennts/Nav';
import SectionA from './componennts/SectionA';
import SectionB from './componennts/SectionB';
function App() {
  return (
    <>
    {/* <img src={process.env.PUBLIC_URL + './video.gif'} alt="" /> */}
    <Nav/>
    <SectionA/>
    <SectionB/>
    </>
  );
}

export default App;
