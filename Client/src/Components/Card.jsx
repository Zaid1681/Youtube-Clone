import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import "./card.css"


// const Container = styled.div`
// color: white ;
// height: 248px ;
// width:273px ;
// background-color: #202020;
// margin-bottom: 40px  ;
// `
const Wrapper = styled.div`
cursor: pointer;

`
const Container = styled.div`
  color:white ;
  height: 248px;
  width: ${(props) => props.type !== "sm" && "273px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "40px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
` 


const Image = styled.img`
width: 100% ;
height: 154px  ;
border-radius: 15px ;
`
const Details = styled.div`
display: flex ;
flex-direction: row ;

`

const ImageContainer = styled.div`
display:flex ;
flex: 1 ;
height: 100% ;
`
const ChannelImage = styled.img`
width: 40px ;
height: 40px ;
border-radius: 50% ;
margin:10px 10px 10px 0px    ;
`
const VideoDescription = styled.div`
display: flex ;
flex-direction: column ;
flex: 5;
justify-content: center ;
padding: 10px 3px;

`
const Title = styled.div`
font-weight: 500 ;
font-size: 14px ;
line-height: 20px ;

`
const ChannelName = styled.div`
font-size: 13px;
margin-top: 4px ;
    line-height: 18px;
    font-weight: 400;
`
const VideoViews = styled.div`
font-size:13px ;
margin:0px ;

`
const Card = ({ type }) => {
    return (
        <Link to='/video/test' style={{"textDecoration": "none"}}>
        <Container className='cardContainer' type={type}>
            <Wrapper>
                <Image src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' />
                <Details type={type}>
                    <ImageContainer >
                        <ChannelImage src='https://www.jiomart.com/images/product/500x630/rv3jnpppl2/tony-stark-iron-man-avengers-infinity-war-men-s-sunglasses-spectacle-frames-silver-blue-product-images-rv3jnpppl2-3-202207021924.jpg' type={type}/>
                    </ImageContainer>
                    <VideoDescription>
                        <Title>Reality of Hindenburg Research Adani | Zaid Khan  | Hindi </Title>
                        <ChannelName>Zaid Channel  <VideoViews>100M views . 1 day ago</VideoViews></ChannelName>
                       
                    </VideoDescription>
                </Details>
            </Wrapper>
        </Container>
        </Link>
    )
}

export default Card
