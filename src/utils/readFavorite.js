import AsyncStorage from '@react-native-async-storage/async-storage'

const readFavorite = async () => {
  try {
    const player = await AsyncStorage.getItem('favorite')
    return player !== null ? JSON.parse(player) : []
  } catch (e) {}
}

export default readFavorite
