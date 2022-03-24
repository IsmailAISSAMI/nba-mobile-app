import React from 'react'
import styled from 'styled-components'
import Cell from './cell'
import { StatsTitle } from '../texts'

const Grid = ({ season }) => {
  return (
    <Container>
      <StatsTitle>Last Season - {season?.seasonYear}</StatsTitle>
      <Row>
        <Cell label='PPG' data={season?.ppg} />
        <Cell label='RPG' data={season?.rpg} />
      </Row>
      <Row>
        <Cell label='APG' data={season?.apg} />
        <Cell label='MPG' data={season?.mpg} />
      </Row>
      <Row>
        <Cell label='GAMES PLAYED' data={season?.gamesPlayed} />
      </Row>
    </Container>
  )
}

const Container = styled.View`
  padding: 16px 0;
  background-color: #1c2f2f;
`

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default Grid
