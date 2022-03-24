import styled from 'styled-components'

const PrimaryButton = styled.TouchableOpacity`
  padding: 6px 12px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 6px;
`

const SecondaryButton = styled.TouchableOpacity`
  padding: 6px 12px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  border-radius: 6px;
`

export { PrimaryButton, SecondaryButton }
