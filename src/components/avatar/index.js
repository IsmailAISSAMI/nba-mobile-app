import React from 'react'
import styled from 'styled-components'

const Avatar = ({ urlImage }) => {
  return (
    <Image
      source={{
        uri: urlImage
      }}
    />
  );
}

const Image = styled.Image`
  width: 240px;
  height: 240PX;
  margin: 6px;
`;

export default Avatar;
