import React from 'react'
import styled from 'styled-components'
import Avatar from '../avatar'
import { SubHeaderText } from '../texts'

const Card = ({ urlImage, fullName }) => {
  return (
    <Container>
      <CardMain>
        <Avatar urlImage={urlImage} />
        <SubHeaderText>{fullName}</SubHeaderText>
      </CardMain>
    </Container>
  )
}

const CardMain = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e7e5e4;
  margin: 12px;
  border-radius: 6px;
  width: 245px;
`

const Container = styled.View`
  display: flex;
  align-items: center;
`

export default Card
