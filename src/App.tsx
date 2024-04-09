import './App.css';
import SideNav from './components/SideNav';
import TaskCard from './components/TaskCard';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="container-fluid">
      <TopNav />
      <div className="row">
        <div className="col-md-2 mt-3">
          <SideNav />
        </div>
        <div className="col-md-9 mt-3">
          <TaskCard />
        </div>
      </div>
    </div>
  );
}

export default App;
