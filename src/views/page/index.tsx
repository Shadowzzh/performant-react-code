import styled from 'styled-components'
import { useEffect, useMemo, useState } from 'react'
import { Card, CardItem } from './css'
import { PageInfo } from './type'

/** 国家列表 */
const CountriesList = (props: {
  countries: PageInfo.Country[]
  onCountryChanged: (countries: PageInfo.Country) => void
  savedCountry: PageInfo.Country
}) => {
  console.log('CountriesList')

  const Item = ({ country }: { country: PageInfo.Country }) => {
    useEffect(() => {
      console.log('Mounted!')
    }, [])
    console.log('Render')
    return (
      <CardItem key={country.name} onClick={() => props.onCountryChanged(country)}>
        {country.name}
      </CardItem>
    )
  }

  return (
    <Card>
      {props.countries.map((item) => {
        return <Item key={item.name} country={item} />
      })}
    </Card>
  )
}

/** 国家选择器 */
const SelectedCountry = (props: {
  country: PageInfo.Country
  onCountrySaved: (country: PageInfo.Country) => void
}) => {
  console.log('SelectedCountry', props.country)
  return <Card>{props.country.name}</Card>
}

export const Page = ({ countries }: { countries: PageInfo.Country[] }) => {
  const [selectedCountry, setSelectedCountry] = useState<PageInfo.Country>(countries[0])
  const [savedCountry, setSavedCountry] = useState<PageInfo.Country>(countries[0])
  console.log('Page')

  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
  `

  const countriesListMemo = useMemo(() => {
    return (
      <CountriesList
        countries={countries}
        onCountryChanged={(c) => setSelectedCountry(c)}
        savedCountry={savedCountry}
      />
    )
  }, [countries, savedCountry])

  const selectedCountryMemo = useMemo(() => {
    return (
      <SelectedCountry
        country={selectedCountry}
        onCountrySaved={() => setSavedCountry(selectedCountry)}
      />
    )
  }, [selectedCountry])

  return (
    <>
      <h1>Country settings</h1>
      <Wrapper>
        {countriesListMemo}
        {selectedCountryMemo}
      </Wrapper>
    </>
  )
}
