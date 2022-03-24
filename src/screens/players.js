import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { FlatList } from 'react-native'
import Avatar from '../components/avatar'
import Card from '../components/card'
import {HeaderText} from '../components/texts'

const Characters = ({ navigation }) => {
  const [year, setYear] = useState(2012)
  const [players, setPlayers] = useState([])

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
      <HeaderText>Players of {year}&rsquo;s Season</HeaderText>
      <FlatList
        data={players}
        keyExtractor={item => item.personId}
        // onEndReached={() => setOffset(offset + 20)}
        renderItem={({ item }) => (
          <Button
            onPress={() =>
              navigation.navigate('Details', { id: item.personId, year: year })
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

export default Characters
