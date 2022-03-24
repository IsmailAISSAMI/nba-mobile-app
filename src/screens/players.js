import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { FlatList } from 'react-native'
import Avatar from '../components/avatar'
import Card from '../components/card'
import {HeaderText} from '../components/texts'

const Players = ({ navigation, route }) => {
  const [players, setPlayers] = useState([])

  const {
     params: { year }
   } = route

  useEffect(() => {
    console.log("players"+year)
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
          </Button>
        )}
      />
    </>
  )
}

const Button = styled.TouchableOpacity``
const TextStyled = styled.Text``

export default Players
