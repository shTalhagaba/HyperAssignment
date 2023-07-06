import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './styles';
import CommentSection from '../../components/commentSection/CommentSection';

function DetailScreen(props) {
  const {item} = props.route.params;
  return (
    <>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Text style={styles.backArrow}>{'<'}</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{item.title}</Text>
            <Text></Text>
          </View>

          <Image source={item.image} style={styles.image} />

          <View style={styles.innerContainer}>
            <Text allowFontScaling={false} style={styles.title}>
              {item.title}
            </Text>
            <Text allowFontScaling={false} style={styles.description}>
              {item.description}
            </Text>

            <View style={styles.rowContainer}>
              <Text allowFontScaling={false} style={styles.discount}>
                {item.discount}
              </Text>
              <Text allowFontScaling={false} style={styles.price}>
                {item.price}
              </Text>
            </View>

            <CommentSection item={item} />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default DetailScreen;
