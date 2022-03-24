import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/card'
import Avatar from '../components/avatar'
import { CommonText, PrimaryButtonText } from '../components/texts'
import { PrimaryButton } from '../components/button'

const Home = ({ navigation }) => {
  const lastYear = new Date().getFullYear()-1
  return (
    <>
      <TextStyled>Home</TextStyled>
      <Button onPress={() => navigation.navigate('Players')}>
        <TextStyled>See the players of this year</TextStyled>
      </Button>
      <PrimaryButton
        onPress={() =>
          navigation.navigate('Players', { year: lastYear })
        }
      >
        <PrimaryButtonText>{lastYear}</PrimaryButtonText>
      </PrimaryButton>
      <Logo
        source={{
          uri: 'http://assets.stickpng.com/images/58428defa6515b1e0ad75ab4.png'
        }}
      />
    </>
  )
}

const TextStyled = styled.Text``
const Button = styled.TouchableOpacity``

const Logo = styled.Image`
  width: 350px;
  height: 240px;
`

Home.propTypes = {}

export default Home
