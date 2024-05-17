import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [showLoader, setShowLoader] = React.useState(true);
  React.useEffect(() => {
    console.log(loading)
    if (!loading) {
      setTimeout(() => {
        document.body.style.overflow = '';
        setTimeout(() => {
          setShowLoader(false);
        }, 1250);
      }, 250);
    } else {
      document.body.style.overflow = 'hidden';
    }

  }, [loading]);
  return (
    <div className="App">
      {showLoader && (
        <div className={`loading ${!loading ? 'fade-out' : ''}`}>
          <ClipLoader
            color="#000000"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <Header />
      <Dashboard setLoading={setLoading}/>
    </div>
  );
}

export default App;
