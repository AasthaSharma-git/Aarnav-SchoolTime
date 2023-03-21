import Swiper from 'react-native-swiper'
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ImageBackground } from 'react-native'

const { height, width } = Dimensions.get("window");


export default function OnboardingScreen({ navigation }) {


  return (

    <Swiper showsButtons={true}>
      <View style={styles.slide1}>
        <ImageBackground
          style={styles.image}
          source={require('../assets/1.jpeg')}
        />
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
        <TouchableOpacity style={{ alignContent: 'center' }} onPress={() =>
          navigation.navigate('Login')}>
          <Text style={{ fontSize: 30, margin: 70 }}>LoginScreen</Text>
        </TouchableOpacity>
      </View>

    </Swiper>


  )

}
const styles = StyleSheet.create({
  wrapper: { width: 200 },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width:'100%',
    height:'100%'

  }
})