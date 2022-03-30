import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
import readFavorite from './readFavorite'

const addToFavorite = async player => {
  const formerFavorite = await readFavorite()
  const arrayOfFavorite = formerFavorite || []

  try {
    const jsonValue = JSON.stringify([
      ...arrayOfFavorite,
      { name: player.temporaryDisplayName, id: player.personId, experience: player.yearsPro,  position: player.pos}
    ])

    await AsyncStorage.setItem('favorite', jsonValue)

    showMessage({
      message: `${player.firstName} ${player.lastName} is successfully added to favorite list.`,
      type: 'success'
    })

  } catch (e) {
    showMessage({
      message: `An error has occurred while adding a new player to favorites!`,
      descriptions: e.message,
      type: 'danger'
    })
  }
}

export default addToFavorite
