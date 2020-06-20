  
import { StyleSheet, Dimensions } from 'react-native'

const styles = {
    charCard: StyleSheet.create({
        container: {
            backgroundColor: "#b0bec5",
            padding: 10,
            margin: 5,
            borderRadius: 10,
            height: Dimensions.get("window").height / 3,
            width: Dimensions.get("window").width / 3
        }
    })
}

export default styles