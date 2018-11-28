import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
// import placeImage from './src/assets/beautiful-place.jpeg'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  };

  placeAddedHandler = placeName => {
    
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        
      }
    })
  }

  modalClosedHandler = () => {
    this.setState({ selectedPlace: null })
  }

  placeSelectedHandler = (key) => {
    this.setState(prevState => {
      return {
        
      }
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
