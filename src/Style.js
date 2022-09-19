import { Dimensions, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
    mainTitle: {
        width: 340,
        textAlign: 'center',
        color: '#191919',
        fontSize: 40,
        fontWeight: 'bold'
    },
    subTitle: {
        width: 340,
        textAlign: 'center',
        color: '#484848',
        fontSize: 17,
    },
})
export { styles }