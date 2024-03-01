import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient'

export default function ShimmerEffect() {

    const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
    return (
        <View>
            <FlatList
                data={[1, 1, 1, 1, 1, 1,1,1,1]}
                renderItem={() => {
                    return (
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <ShimmerPlaceholder

                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30
                                }}
                                shimmerColors={['gray', 'white', 'gray']}>
                            </ShimmerPlaceholder>
                            <View style={{
                                marginLeft: 10,
                            }}>
                                <ShimmerPlaceholder

                                    style={{
                                        width: 200,
                                        height: 18,
                                        marginBottom: 7
                                    }}
                                    shimmerColors={['gray', 'white', 'gray']}>
                                </ShimmerPlaceholder>
                                <ShimmerPlaceholder

                                    style={{
                                        width: 200,
                                        height: 18,
                                    }}
                                    shimmerColors={['gray', 'white', 'gray']}>
                                </ShimmerPlaceholder>
                            </View>
                            <ShimmerPlaceholder

                                style={{
                                    width: 43,
                                    height: 43,
                                    marginLeft: 80
                                }}
                                shimmerColors={['gray', 'white', 'gray']}>
                            </ShimmerPlaceholder>
                        </View>
                    )
                }} />
        </View>
    )
}



//for using shimmer effect we must use 2 package
// 1- npm i react-native-shimmer-placeholder
// 2- npm i react-native-linear-gradient
// shimmerColors={['startColor','transistionColor','endColor']}>