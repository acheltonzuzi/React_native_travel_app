import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

const style=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:Colors.bgColor
    },
    headingTxt:{
        fontSize:28,
        fontWeight:"800",
        color:Colors.black,
        marginTop:10,
    }
})

export default style