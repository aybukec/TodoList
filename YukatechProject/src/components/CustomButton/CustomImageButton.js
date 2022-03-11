import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

function CustomImageButton({ bradius,source, onPress, widthB, heightB, bgColor, bmargin }) {
    return (
        <TouchableOpacity style={{
            backgroundColor: bgColor !== undefined ? bgColor : "transparent",
            borderRadius:bradius !== undefined ? bradius : 0,
            marginLeft: bmargin !== undefined ? bmargin : 0,
        }} onPress={() => onPress()} >
            <Image
                resizeMode='contain'
                source={source}
                style={{
                    width: widthB !== undefined ? widthB : 35,
                    height: heightB !== undefined ? heightB : 35
                }}
            />
        </TouchableOpacity>
    )
}




export default CustomImageButton