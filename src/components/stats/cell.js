import React from 'react'
import styled from 'styled-components'

const Cell = ({label, data}) => {
  return (
    <Container>
        <Label>{label}</Label>
        <Data>{data}</Data>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 8px 0;
`
const Label = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`
const Data = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 16px;
`

export default Cell
