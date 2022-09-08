import styled from 'styled-components'
import { useEffect, useMemo, useState } from 'react'
import { Card, CardItem, Wrapper } from './css'
import { PageInfo } from './type'

const Item = ({
  country,
  onCountryChanged
}: {
  country: PageInfo.Country
  onCountryChanged: (countries: PageInfo.Country) => void
}) => {
  useEffect(() => {
    console.log('Mounted!')
  }, [])
  console.log('Render')
  return (
    <CardItem key={country.name} onClick={() => onCountryChanged(country)}>
      {country.name}
    </CardItem>
  )
}

/** 国家列表 */
const CountriesList = (props: {
  countries: PageInfo.Country[]
  onCountryChanged: (countries: PageInfo.Country) => void
  savedCountry: PageInfo.Country
}) => {
  console.log('CountriesList')

  return (
    <Card>
      {props.countries.map((item) => {
        return <Item key={item.name} country={item} onCountryChanged={props.onCountryChanged} />
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

  const [counter, setCounter] = useState<number>(1)
  console.log('Page')

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
        {/* <button onClick={() => setCounter(counter + 1)}>点击这个计数器 {counter}</button> */}
        {countriesListMemo}
        {selectedCountryMemo}
      </Wrapper>
    </>
  )
}
