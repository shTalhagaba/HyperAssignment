import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  Image,
} from 'react-native';
import Colors from '../../common/colors';
import styles from './styles';
import Constants from '../../common/constants';
import ItemList from '../../components/flatlistComponents/ItemList';


function HomeScreen(props) {
  return (
<>
<View style={styles.container}>
    <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>자유톡</Text>
    </View>

    <FlatList
                    data={Constants.FLATLIST_DATA}
                    numColumns={2}
                    style={styles.flatListContainer}
                    renderItem={({ item, index }) => {
                        return(
                            <ItemList
                            item={item}
                            onPress={()=>props.navigation.navigate('DetailScreen',{item})} />
                        )
                    }}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={false}
                  />
</View>
</>
  );
}


export default HomeScreen;
