import React, { Component } from 'react';
import {
    Map, 
    InfoWindow, 
    Marker, 
    GoogleApiWrapper
} from 'google-maps-react';
import MAP_STYLE from './Map.style.json';
import CHARGERS from '../../dummy_chargers';
 
export class CustomMap extends Component {
  render() {
    return (
      <Map 
        google={this.props.google} 
        styles={MAP_STYLE}
        initialCenter={{
            lat: 52.520008,
            lng: 13.404954,
        }}
        center={this.props.focusPoint && this.props.focusPoint}
        zoom={14}
        zoomControl={false}
        mapTypeControl={false}
        scaleControl={false}
        streetViewControl={false}
        panControl={false}
        rotateControl={false}
        fullscreenControl={false}
        >
        {CHARGERS.map(({id, lat, lng, output}) => (
            <Marker
                name={id}
                position={{ lat, lng }}
                icon='../../static/images/pin.png'
                onClick={this.props.onMarkerClick({ id, lat, lng, output })} />
        ))}
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDjcdEl2-lXZ6h7jVlRkBqZiHDKzWZxHJk'
})(CustomMap)
