import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native'
import axios from 'axios'
import styled from 'styled-components'
import FlashMessage from 'react-native-flash-message'

import Card from '../components/card'
import { HeaderText } from '../components/texts'

import readFavorite from '../utils/readFavorite'
import addToFavorite from '../utils/addToFavorite'
import removeFromFavorite from '../utils/removeFromFavorite'

const Players = ({ navigation, route }) => {
  const [players, setPlayers] = useState([])

  const {
    params: { year }
  } = route

  const checkFavorite = async player => {
    const allFav = await readFavorite()

    const index = allFav
      .map(f => f.id)
      .findIndex(itemId => itemId === player.personId)

    if (index === -1) {
      addToFavorite(player)
    } else {
      removeFromFavorite(player)
    }
  }

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://data.nba.net/data/10s/prod/v1/${year}/players.json`
    })
      .then(response =>
        setPlayers([...players, ...response.data.league.standard])
      )
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <FlashMessage position='top' />
      <HeaderText>Players of {year}&rsquo;s Season</HeaderText>
      <FlatList
        data={players}
        keyExtractor={item => item.personId}
        renderItem={({ item }) => (
          <Button
            onPress={() =>
              navigation.navigate('Details', { year: year, player: item })
            }
          >
            <Card
              fullName={`${item.firstName} ${item.lastName.toUpperCase()}`}
              urlImage={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item.personId}.png`}
            />

            <Button
              onPress={() => {
                checkFavorite(item)
              }}
            >
              <TextStyled>
                ADD TO FAVORITE
              </TextStyled>
            </Button>
          </Button>
        )}
      />
    </>
  )
}

const Button = styled.TouchableOpacity``
const TextStyled = styled.Text``

export default Players
