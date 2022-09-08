import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Card = styled.div`
  padding: 20px;
  border-radius: 6px;
  background-color: var(--bg-card);
  box-sizing: border-box;
  overflow: hidden;

  color: var(--color-card);
  flex-basis: 48%;
`

export const CardItem = styled.div`
  cursor: pointer;
  border-radius: 4px;
  :hover {
    cursor: pointer;
    background-color: var(--bg-card-hover);
    color: var(--color-card-hover);
  }
`
