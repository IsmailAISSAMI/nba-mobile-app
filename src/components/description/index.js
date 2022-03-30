import React from 'react'
import styled from 'styled-components'
import Avatar from '../avatar'
import { SubHeaderText, CommonText } from '../texts'

const Description = ({ urlImage, fullName, experience, position }) => {
  return (
    <Container>
      <Avatar urlImage={urlImage} />
      <DescriptionMain>
        <SubHeaderText>{fullName}</SubHeaderText>
        <Detail>
          <CommonText>EXPERIENCE: {experience}</CommonText>
          <CommonText>POSITION: {position}</CommonText>
        </Detail>
      </DescriptionMain>
    </Container>
  )
}

const Container = styled.View`
  display: flex;
  align-items: center;
`

const DescriptionMain = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #006cb7;
  margin: 12px;
  border-radius: 6px;
  width: 245px;
`

const Detail = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default Description
