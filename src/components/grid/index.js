import React from 'react'
import styled from 'styled-components'
import Cell from './cell'
import { SubHeaderText } from '../texts'

const Grid = ({ player }) => {
  const calculateAge = birthDate => {
    var age_dt = new Date(Date.now() - new Date(birthDate).getTime())
    var year = age_dt.getUTCFullYear()
    return Math.abs(year - 1970)
  }

  return (
    <Container>
      <Row>
        <Cell label='COUNTRY' data={player?.country} />
        <Cell label='HEIGHT' data={`${player?.heightMeters}m`} />
        <Cell label='WEIGHT' data={`${player?.weightKilograms} Kg`} />
      </Row>
      <Row>
        <Cell label='BIRTH DATE' data={player?.dateOfBirthUTC} />
        <Cell
          label='AGE'
          data={`${calculateAge(player?.dateOfBirthUTC)} years`}
        />
      </Row>
      <Row>
        <Cell label='EXPERIENCE' data={`${player?.yearsPro} years`} />
        <Cell label='POSITION' data={player?.pos} />
      </Row>
    </Container>
  )
}

const Container = styled.View``

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default Grid
