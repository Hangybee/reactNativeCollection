import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ShimmerEffect from './component/ShimmerEffect'
import GifImage from './component/GifImage'
import FlatListTut from './component/FlatListTut'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <ShimmerEffect /> */}
      {/* <GifImage /> */}
      <FlatListTut />
    </View>
  )
}

export default App