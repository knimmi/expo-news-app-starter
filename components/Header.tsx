import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors }  from '@/constants/Colors'

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.userInfo}>
      <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/6858/6858504.png'}} style={styles.userImg}/>
      <View style={{ gap: 3}}>
        <Text style={styles.welcomeTxt}>Welcome</Text>
        <Text style={styles.userName}>John Doe!</Text>
      </View>
      </View>
        <TouchableOpacity onPress={() => {}}>
            <Ionicons name='notifications-outline' size={24} color={Colors.black}/>
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff',
        overflow: 'hidden',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    welcomeTxt: {
        fontSize: 12,
        color: Colors.darkGrey,
    },
    userName:{
        fontSize: 14,
        fontWeight: '700',
        color: Colors.black,
    }
})