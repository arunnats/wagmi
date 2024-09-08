import React from "react";
import GoogleMapReact from "google-map-react";

const MapComp = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
	const defaultProps = {
		center: {
			lat: 9.9658,
			lng: 76.2421,
		},
		zoom: 11,
	};

	return (
		// Important! Always set the container height explicitly
		<div style={{ height: "300px", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<MapComp lat={9.9658} lng={76.2421} text="Wagmi!" />
			</GoogleMapReact>
		</div>
	);
}
