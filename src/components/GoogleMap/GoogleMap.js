import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import GoogleMapsMarker from './GoogleMapMarker';

export default class GoogleMap extends PureComponent {
  render() {
    const {
      apiKey: key,
      customStylesForMarker,
      enableMarker,
      height,
      lat,
      lng,
      markerBackgroundColor,
      markerContent,
      markerTextColor,
      width,
      zoom,
    } = this.props;
    const center = {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    };

    return (
      <div style={{ height: `${height}px`, width: `${width}px` }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={center}
          defaultZoom={zoom}>
          { enableMarker && (
            <GoogleMapsMarker
              backgroundColor={markerBackgroundColor}
              content={markerContent}
              customStyles={customStylesForMarker}
              lat={parseFloat(lat)}
              lng={parseFloat(lng)}
              textColor={markerTextColor}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

GoogleMap.propTypes = {
  apiKey: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  lat: PropTypes.string,
  lng: PropTypes.string,
  zoom: PropTypes.number,
  enableMarker: PropTypes.bool,
  markerContent: PropTypes.string,
  markerBackgroundColor: PropTypes.string,
  markerTextColor: PropTypes.string,
  customStylesForMarker: PropTypes.object,
};

GoogleMap.defaultProps = {
  apiKey: 'AIzaSyDy-PLU88kPkeiYheurCR0rgfDDqWxLNFQ',
  height: 600,
  width: 600,
  lat: '54.385285',
  lng: '18.593360',
  zoom: 14,
  enableMarker: true,
  markerContent: 'UXPin HQ',
  markerBackgroundColor: '#ffffff',
  markerTextColor: '#000000',
  customStylesForMarker: {},
};
