import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'
import {Avatar, Button, Layout} from '@ui-kitten/components'
import {Dis} from '../components/Dis'

import list from '../data/dis.json'

export const HomeScreen = ({navigation}) => {
  const createDIS = () => {
    navigation.navigate('CreateDIS')
  }
  const openDIS = id => {
    navigation.navigate('OpenDIS', {id})
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Avatar
        source={require('../assets/thumb-up-dynamic-color.png')}
        style={styles.image}
      />
      <Layout style={styles.container}>
        {list.map(dis => (
          <Dis dis={dis} onPress={() => openDIS(dis.id)} />
        ))}
        <Button onPress={createDIS}>Skapa nytt DIS</Button>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    padding: 10,
    minHeight: 350,
  },
})
