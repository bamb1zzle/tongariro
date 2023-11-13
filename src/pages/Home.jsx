import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID='1' title='Theme of the Month: Star Wars' fetchURL={requests.requestHorror} />
      <Row rowID='2' title='Popular Releases' fetchURL={requests.requestPopular} />
      <Row rowID='3' title='Next Month: Scary Month' fetchURL={requests.requestUpcoming} />
    </>
  )
}

export default Home