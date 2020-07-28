import React, { Fragment,useState } from "react";
import SideBar from './sidebar';
import CovidGoogleMaps from './googlemaps';

const Layout = () => {
	const [datacovid, setDataCovid] = useState({});
	const mapsMarkerOnClik = (data) => {
		setDataCovid(data);
	};

	return(
		<Fragment>
			<div className="wraper">
				<div className="sidebar">
					<SideBar displayData={datacovid}/>
				</div>
				<div className="content">
					<CovidGoogleMaps isMarkerShown markerClick={mapsMarkerOnClik}/>
				</div>
			</div> 
		</Fragment>
	);

};


export default Layout;