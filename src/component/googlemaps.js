import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from "react-google-maps"
import boundaries from "./boundaries"

const dataCity = [
    {
        "label" : "Jakarta Utara",
        "lat": -6.138414, 
        "lng": 	106.863956, 
        "covidCase": {
            "positive": 32,
            "negative": 25,
            "control": 347
        }
    },
    {
        "label" : "Jakarta Pusat",
        "lat": -6.186486, 
        "lng": 106.834091, 
        "covidCase": {
            "positive": 48,
            "negative": 29,
            "control": 441
        }
    },
    {
        "label" : "Jakarta Selatan",
        "lat": -6.261493, 
        "lng": 106.810600, 
        "covidCase": {
            "positive": 80,
            "negative": 87,
            "control":  536
        }
    },
    {
        "label" : "Jakarta Barat",
        "lat": -6.168329, 
        "lng": 106.758849, 
        "covidCase": {
            "positive": 39,
            "negative": 84,
            "control": 488
        }
    },
    {
        "label" : "Jakarta Timur",
        "lat": -6.225014, 
        "lng": 106.900447, 
        "covidCase": {
            "positive": 64,
            "negative": 43,
            "control": 574
        }
    },
    {
        "label" : "Kepulawan Seribu",
        "lat": -5.798526, 
        "lng": 106.507198, 
        "covidCase": {
            "positive": 0,
            "negative": 0,
            "control": 2

        }
    }
]

const CovidGoogleMaps = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8HuXMQT69MkM7HTrOAEn6-dLyUZb66z8&libraries=geometry,drawing,places                                                                                                      ",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
    )((props) => {
        const {features} = boundaries;
        var attributes = [];
        
        features.map((data, i)=>{
            if(data.geometry.rings.length === 1 ){
                attributes = [ data.geometry.rings[0].map(data=>{
                    return {"lat": data[1], "lng": data[0]}
                }), ...attributes]
            }
            
        });
        
        return(
            <GoogleMap
                defaultZoom={12}
                defaultCenter={{ lat: -6.200000, lng: 	106.816666}}
            >
                {props.isMarkerShown ? dataCity.map((data, i)=>{
                    return (
                        <Marker position={{ lat: data.lat, lng: data.lng }} onClick={(e)=>{ props.markerClick(data) }} key={i} />
                    )
                }) : null}
                {attributes.map((data, i)=>{
                    return (
                        <Polygon
                            path={data}
                            key={i}
                            options={{
                                fillColor: "#f00",
                                fillOpacity: 0.1,
                                strokeColor: "#f00",
                                strokeOpacity: 1,
                                strokeWeight: 1
                            }} />
                    )
                })}
                
            </GoogleMap>
        );
    }
);

export default CovidGoogleMaps;