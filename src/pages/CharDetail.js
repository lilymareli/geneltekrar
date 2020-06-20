import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

const CharDetail = (props) => {
    const [charDetails, setCharDetails] = useState({})

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let response = await axios.get("https://swapi.dev/api/people/?search=" + props.route.params.charName)
        console.log(response.data)
    }

    return (
        <View>
            <Text>Char Detail</Text>
        </View>
    );
}

export { CharDetail };