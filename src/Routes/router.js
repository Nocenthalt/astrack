import Main from './main'
import Map from './map'
import React from 'react'
const routes = {
    "/": () => <Main />, 
    "/map": () => <Map />
  };

  export default routes;
