import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../src/Components/Card.jsx'
import axios from "axios"


const Container = styled.div`
margin:  16px ;

`

const Wrapper = styled.div`
color: cyan ;
display: flex ;
justify-content: space-between ;
flex-wrap: wrap ;
gap: 10px;
`
const Home = () => {
  const [videos, setVideos] = useState([])
  let url = "/api/videos/ran";
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        //using axios to get the data 
        const res = await axios.get('/videos/ran');
        setVideos(res.data);
      console.log(" vidoes here",videos);
      } catch (error) {
        console.log("Error",error);
        // alert(error)
      }
    }
    fetchVideos()
  }, [url])

  return (
    <Container>
      <Wrapper>
        <Card />
        {videos.map((video) => (

          <Card />
        ))}
        {/* <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        <Card />  */}
      </Wrapper>

    </Container>
  )
}

export default Home
