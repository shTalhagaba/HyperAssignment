import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import Colors from '../../common/colors';

function ItemList(props) {
  const {item, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={item.image} />
      <View style={styles.innerContainer}>
        <Text style={styles.label}>{item.title}</Text>
        <View style={styles.row}>
          <Text style={styles.discountTxt}>{item.discount}</Text>
          <Text style={styles.label}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '48%',
    height: 280,
    backgroundColor: Colors.white,
    marginRight: 10,
  },
  innerContainer: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  label: {
    color: Colors.black,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discountTxt: {
    color: Colors.red,
    fontWeight: 'bold',
  },
});

export default ItemList;
