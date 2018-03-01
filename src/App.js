import React from 'react';
import AddMarker from './containers/addMarker';
import VisibleMarkerList from './containers/visibleMarkerList';
import VisibleMarkerMap from './containers/visibleMarkerMap';
import Footer from './components/footer';
import './static/scss/app.css';

const App = () => {
  return (
    <div className="App">
      <AddMarker />
      <div className="property-map">
        <VisibleMarkerList />
        <VisibleMarkerMap />
      </div>
      <Footer />
    </div>
  );
}

export default App;
