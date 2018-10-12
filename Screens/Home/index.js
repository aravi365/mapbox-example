import React, { Component } from 'react';
import { StyleSheet, View,Geolocation } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';


Mapbox.setAccessToken('pk.eyJ1Ijoidml2ZWstY3ViZXQiLCJhIjoiY2puNW90NTQ1MTF0NDNrcnVwYWE5NmFjOCJ9.WTq-Pya4f39CjjRR-3_4EA');

export default class Home extends Component<{}> {
    state={
        lat:null,
        lng:null,
        error:null

    }

    componentDidMount=()=>{
      
        
        navigator.geolocation.getCurrentPosition(
          
            (position) => {
                console.log("position=",position)
              this.setState({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                error: null,
              });


              
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000 },
          );



    }
    renderAnnotations () {
        let {lat,lng}=this.state
     
    //   lng = String(lng).toFixed(3)

        return (
          <Mapbox.PointAnnotation
            key='pointAnnotation'
            id='pointAnnotation'
            coordinate={[76.3071, 10.0261]}>
    
            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill} />
            </View>
            <Mapbox.Callout title='Look! An annotation!' />
          </Mapbox.PointAnnotation>
        )
      }

      
  render() {
      let {lat,lng} = this.state
  
      console.log("lat=",lat,"lng=",lng)
    return (
      <View style={styles.container}>
        {(this.state.lat && this.state.lng) &&<Mapbox.MapView
            styleURL={Mapbox.StyleURL.Light}
            zoomLevel={15}
            centerCoordinate={[lng, lat]}
            style={styles.container}
            showUserLocation={true}
            >
             {this.renderAnnotations()}
        </Mapbox.MapView>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});