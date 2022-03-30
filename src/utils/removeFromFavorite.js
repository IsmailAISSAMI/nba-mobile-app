import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readFavorite from './readFavorite'

const removeFromFavorite = async player => {
  const formerFavorite = await readFavorite()
  const filteredFavorite = formerFavorite.filter(fav => fav.id !== player.personId)
  try {
    const jsonValue = JSON.stringify(filteredFavorite)
    await AsyncStorage.setItem('favorite', jsonValue)
    showMessage({
      message: `${player.firstName} ${player.lastName} is successfully removed from favorite list.`,
      type: 'info'
    })
  } catch (e) {
    showMessage({
      message: `An error has occurred while removing a player from favorite list!`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default removeFromFavorite