import React from 'react';
import AddMarker from './containers/addMarker';
import VisibleMarkerList from './containers/visibleMarkerList';
import VisibleMarkerMap from './containers/visibleMarkerMap';
import Filter from './components/filter/filter';
import './static/scss/app.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <AddMarker />
        <Filter />
      </header>
      <div className="property-map">
        <VisibleMarkerList />
        <VisibleMarkerMap />
      </div>
    </div>
  );
}

export default App;
