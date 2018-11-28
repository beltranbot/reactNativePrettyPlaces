import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    // const placesOutput = props.places.map((place, i) => (
    //     <ListItem key={i} placeName={place}
    //       onItemPressed={() => props.onItemDeleted(i)}
    //       />
    //   ));

    return (
        <FlatList
          data={props.places}
          renderItem={(info) => <ListItem placeName={info.item.value}
            onItemPressed={() => props.onItemDeleted(info.item.key)}
          />}
          style={styles.listContainer} />
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;