import GoogleMapReact from 'google-maps-react';

const MapContainer = ({ center, zoom }) => {
    return (

        // TODO: Google Maps can't open
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyD8ju2F-TsWEPDWtyyuoSn-qouvHGUdVTc" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default MapContainer;