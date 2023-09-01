import styled from 'styled-components'

export const PageEmptyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 100px;
`

export const PlantContainer = styled.div`
  padding: 50px;
  margin-top: 200px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`

export const TitleEmptyContainer = styled.div`
  padding: 50px;
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
  font-weight: bold;
`

export const CertificateContainer = styled.div`
  padding: 50px;
`
