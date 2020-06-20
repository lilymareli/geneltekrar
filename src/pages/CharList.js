import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, FlatList, Text } from 'react-native'

import { CharCard, SelectedCharButton } from '../components'

const CharList = (props) => {
    const [selectedChars, setSelectedChars] = useState([])
    const [charData, setCharData] = useState({})

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let response = await axios.get("https://swapi.dev/api/people/")
        setCharData(response.data)
    }

    const renderChar = ({ item, index }) => <CharCard
        charData={item}
        onCharSelect={() => props.navigation.navigate("CharDetail", { charName: item.name })}
        onCompareSelect={() => charToList(item)}
    />

    const onEnd = async () => {
        let response = await axios.get(charData.next)

        let currentArray = [...charData.results]
        currentArray = [...currentArray, ...response.data.results]

        response.data.results = currentArray

        setCharData(response.data)

    }

    function charToList(item) {
        let updatedCharList = [...charData.results]
        const index = updatedCharList.findIndex(x => x.name == item.name)

        if (updatedCharList[index].isSelected == undefined)
            updatedCharList[index].isSelected = false

        updatedCharList[index].isSelected = !updatedCharList[index].isSelected

        setCharData({ ...charData, results: updatedCharList })

        const selectedCharIndex = selectedChars.findIndex(x => x.name == item.name)

        if (selectedCharIndex == -1) {
            let updatedSelectedList = [...selectedChars]
            updatedSelectedList.push(item)
            setSelectedChars(updatedSelectedList)
        }
        else {
            let updatedSelectedList = [...selectedChars]
            updatedSelectedList.splice(selectedCharIndex, 1)
            setSelectedChars(updatedSelectedList)
        }

    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    onEndReached={onEnd}
                    onEndReachedThreshold={0.2}
                    columnWrapperStyle={{ justifyContent: 'space-around' }}
                    numColumns={2}
                    keyExtractor={(_, index) => index.toString()}
                    data={charData.results}
                    renderItem={renderChar}
                />

                {
                    selectedChars.length > 0
                        ?
                        <SelectedCharButton
                            selectedCharLength={selectedChars.length}
                            onSelect={() => props.navigation.navigate("Compare", { charList: JSON.stringify(selectedChars) })}
                        />
                        : null
                }
            </View>
        </SafeAreaView>
    );
}

export { CharList };