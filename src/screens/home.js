import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/card'
import Avatar from '../components/avatar'
import { CommonText, PrimaryButtonText } from '../components/texts'
import { PrimaryButton, SecondaryButton } from '../components/button'

const Home = ({ navigation }) => {
  const [lastYear, setLastYear] = useState(2020)
  useEffect(() => {
    setLastYear(new Date().getFullYear() - 1)
  }, [])

  return (
    <Container>
      <Logo
        source={{
          uri: 'http://assets.stickpng.com/images/58428defa6515b1e0ad75ab4.png'
        }}
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Players', { year: lastYear })}
      >
        <PrimaryButtonText>{lastYear}</PrimaryButtonText>
      </PrimaryButton>

      <SecondaryButton
        onPress={() => navigation.navigate('Players', { year: lastYear-1 })}
      >
        <PrimaryButtonText>{lastYear - 1}</PrimaryButtonText>
      </SecondaryButton>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Logo = styled.Image`
  width: 350px;
  height: 240px;
`

Home.propTypes = {}

export default Home
