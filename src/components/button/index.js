import styled from 'styled-components'

const PrimaryButton = styled.TouchableOpacity`
  margin: 16px 0;
  padding: 8px 16px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9174c;
  border-radius: 6px;
`

const SecondaryButton = styled.TouchableOpacity`
  margin: 16px 0;
  padding: 8px 16px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #006cb7;
  border-radius: 6px;
`

export { PrimaryButton, SecondaryButton }
