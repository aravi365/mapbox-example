import React,{Component } from 'react'
import { View,Text,Dimensions,StyleSheet} from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <View
                style={styles.container}
            >
                <Text>Home</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})