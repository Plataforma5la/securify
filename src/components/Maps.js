import React from 'react';
import {View} from 'react-native';

function Maps (props){
    return(
        <MapView initialRegion={props.loc}>
            <MapView.Marker
             
            />
        </MapView>
    )
}

export default Maps;