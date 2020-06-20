import moment from 'moment'
import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import styles from '../styles';

const CharCard = (props) => {
    return (
        <TouchableOpacity
            style={[styles.charCard.container, { backgroundColor: props.charData.isSelected ? "gray" : "#b0bec5" }]}
            onPress={props.onCharSelect}
            onLongPress={props.onCompareSelect}
        >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Text style={styles.charCard.charName}>{props.charData.name}</Text>
                <Text>{moment(props.charData.created).format("DD.MM.YYYY / HH:mm")}</Text>
            </View>
        </TouchableOpacity>
    );
}

export { CharCard };