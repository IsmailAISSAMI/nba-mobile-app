import React, { useState, useEffect } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Text, FlatList } from 'react-native'
import readFavorite from '../utils/readFavorite'
import styled from 'styled-components'
import Description from '../components/description'

const Favorite = () => {
  const [fav, setFav] = useState([])

  const addFavToState = async () => {
    const allFav = await readFavorite()
    setFav(allFav)
  }

  useFocusEffect(() => {
    addFavToState()
  })

  useEffect(() => {
    addFavToState()
  }, [])

  return (
      <FlatList
        data={fav}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <Description
              fullName={item?.name}
              experience={item?.experience}
              position={item?.position}
              urlImage={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${item?.id}.png`}
            />
        )}
      />
  )
}

export default Favorite