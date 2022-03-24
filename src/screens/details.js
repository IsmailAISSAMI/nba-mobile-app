import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import axios from 'axios'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const Details = ({ route }) => {
  const [player, setPlayer] = useState({})

  const {
    params: { id, year }
  } = route

  useEffect(() => {
    console.log(id)
    console.log(year)
    axios({
      method: 'GET',
      url: `https://data.nba.net/data/10s/prod/v1/2020/players/${id}_profile.json`
    })
      .then(response => {
        console.log('detail page: ' + response)
        setPlayer(...response)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <Container>
      <Avatar
        urlImage={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player?.personId}.png`}
      />
      <Text>First name{player?.firstName}</Text>
      {/* <Text>{character.description}</Text> */}
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: red;
`

export default Details
