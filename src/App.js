import React from 'react';
import AddMarker from './containers/addMarker';
import VisibleMarkerList from './containers/visibleMarkerList';
import VisibleMarkerMap from './containers/visibleMarkerMap';
import Footer from './components/footer';
import logo from './logo.svg';
import './static/scss/app.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <AddMarker />
      <VisibleMarkerList />
      <VisibleMarkerMap />
      <Footer />
    </div>
  );
}

export default App;
