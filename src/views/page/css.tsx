import styled from 'styled-components'

export const Card = styled.div`
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;

  color: #3b3b3b;
  flex-basis: 48%;
`

export const CardItem = styled.div`
  cursor: pointer;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: #242424;
    color: #eee;
  }
`
