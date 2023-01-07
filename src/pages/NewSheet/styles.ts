import styled from 'styled-components'

export const SheetContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const SheetHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.4rem 0;
`

export const SheetBodyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  .attributesBlock,
  .inventoryBlock {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: center;
  }

  img {
    width: 100%;
    padding: 1rem;
  }

  @media only screen and (max-width: 600px) {
  }
`
