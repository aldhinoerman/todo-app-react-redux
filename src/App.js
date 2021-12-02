import Header from './components/Header';
import Tasks from './components/Tasks';
import TasksCard from './components/Tasks';

import './styles/global.scss';

function App() {
  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />

          <Tasks />

          {/* Complete Card */}
        </div>
      </div>
    </>
  );
}

export default App;
