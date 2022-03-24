import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import axios from 'axios'
import styled from 'styled-components'
import Avatar from '../components/avatar'

const Details = ({ route }) => {
  const [season, setSeason] = useState({})

  const {
    params: { id, year, player }
  } = route

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://data.nba.net/data/10s/prod/v1/2020/players/${player.personId}_profile.json`
    })
      .then(response => setSeason(response.data))
      .catch(error => console.log(error))
  }, [])

  useEffect(()=>{
    console.log(player)
    console.log(season)
  }, [season])

  return (
    <Container>
      <Avatar
        urlImage={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`}
      />
      <Text>{player?.firstName}</Text>
      <Text>{player?.lastName}</Text>
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
