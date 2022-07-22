import logo from './images/stackline_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Graph from './graph';
import Table from './table';
import Profile from './profile'
import stckline_data from './data/stackline_frontend_assessment_data_2021.json'

function App() {
  return (
    <div>
      <nav className="navbar header navbar-expand-sm bg-primary " style={{ background: "#001a52" }}>
        <img src={logo} alt="/#" width={100} height={80} className="pl-5" style={{ padding: "10px" }} />
      </nav>
      <div className="container">
        <div className="content">
        <Graph stckline_data={stckline_data} />
        <Table stckline_data={stckline_data} />
        </div>
        <div className='profile'style={{ width: "100%", padding:"5%", display:"center"}}>
       <Profile stckline_data={stckline_data}/>
        </div>
      </div>
    </div>


  );
}

export default App;
