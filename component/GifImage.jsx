import { View, Text, Image } from 'react-native'
import React from 'react'

const GifImage = () => {
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('../assets/image/ricefield.gif')} style={{height:200, width:200}} />
    </View>
  )
}

export default GifImage