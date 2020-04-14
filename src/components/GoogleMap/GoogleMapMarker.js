import React from 'react';

const GoogleMapsMarker = ({
  content,
  customStyles,
  textColor,
  backgroundColor,
}) => {
  const styleMarkerWrapper = {
    display: 'inline-block',
    width: '80px',
    position: 'relative',
    backgroundColor,
    boxShadow: '0px 0px 11px 0px rgba(227,227,227,1)',
    borderRadius: '2px',
    padding: '10px',
  };
  const styleMarkerContent = Object.assign({}, { color: textColor }, customStyles);
  const styleMarkerTriangle = {
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '8px 8px 0 8px',
    borderColor: `${backgroundColor} transparent transparent transparent`,
  };

  return (
    <div style={styleMarkerWrapper}>
      <div style={styleMarkerContent}>{ content }</div>
      <div style={styleMarkerTriangle}></div>
    </div>
  );
};

export default GoogleMapsMarker;
