import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import axios from 'axios'
import styled from 'styled-components'
import Avatar from '../components/avatar'
import Grid from '../components/grid'
import Stats from '../components/stats'

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
      .then(response => setSeason(response.data.league.standard.stats.latest))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    console.log(player)
    console.log(season)
  }, [season])

  return (
    <Container>
      <Center>
        <Avatar
          urlImage={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`}
        />
      </Center>
      <Grid player={player} />
      <Stats season={season} />
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #e7f0f7;
`

const Center = styled.View`
  align-items: center;
`


export default Details
