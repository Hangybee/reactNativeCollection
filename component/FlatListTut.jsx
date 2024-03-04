import { View, Text, FlatList, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const FlatListTut = () => {
    const [data, setData] = useState([])
    const [refreshing, setRereshing] = useState(false)
    const [page, setPage] = useState(1)
    const fetchData = async (type = null) => {
        console.log('sssssssss',page)
        setRereshing(true)
        try {
            const response = await fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=10`, {
                headers: {
                    "content-type": "application/json",
                    "app-id": "65e162336b3e750f591479e8"
                }
            })
            if (!response.ok) {
                setRereshing(false)
                console.log('error in calling api')
            }
            else {
                const res = await response.json()
                setRereshing(false)
                if (type === 'loadmore' && data.length>0) {
                    setData([...new Set([...data, ...res.data])])
                    console.log('page',page)
                }
                else {
                    setData(res.data)
                }

            }
        }
        catch (error) {
            console.log('some error occured', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={data.id}
                renderItem={({ index, item }) => {
                    return (
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image source={{
                                uri: item.picture,
                            }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                            <Text style={{ color: 'black' }}>{item.firstName}</Text>
                        </View>
                    )
                }}
                horizontal={false}
                ItemSeparatorComponent={<View style={{ height: 20 }} />} // it applies the property between items except top and bottom item
                ListEmptyComponent={<Text>No data found</Text>} //this accepts a component and renders it when no data is available with flatlist
                ListHeaderComponent={<Text style={{ color: 'black', paddingVertical: 20 }}>Header component</Text>}
                ListFooterComponent={<Text>Footer component</Text>}
                refreshing={refreshing} // if value to refreshing it will active turn to pull
                onRefresh={fetchData} // on pulling the flatlist this funtion will run
                onEndReached={() => {
                    setPage(page + 1)
                    fetchData('loadmore')
                }} // this will run when we get into end of the list
            //onEndReachedThreshold={.5}
            />
        </View>
    )
}

export default FlatListTut