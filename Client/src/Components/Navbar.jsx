import React from 'react'
import styled from 'styled-components'
import ytlogo from "../../asset/ytlogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Link } from 'react-router-dom'
  

const Container = styled.div`
color: white ;
position:sticky ;
top: 0;
`

const Wrapper = styled.div`
display: flex;
width: 100%;
height: 4rem;
background-color: #202020;

`
const Logo = styled.div`
gap: 0px;
font-weight: 600  ;
display:  flex;
flex:2 ;
text-align: center ;
align-items: center ;
justify-content: left ;
margin-left: -30px ;

`
const SearchDiv = styled.div`
display: flex ;
flex: 4;
display: flex;
align-items: center ;
`
const ChannelImage = styled.img`
width: 40px ;
cursor: pointer;
height: 40px ;
border-radius: 50%;
margin-right: 50px ;
`
const User = styled.div`
display:flex ;
flex: 2 ;
justify-content:right ;
align-items: center;
text-align:center ;
margin:auto ;
gap:20px;

`
const LogoIcon = styled.img`
width: 30% ;
padding:0 ;
margin:0 ;
margin-right: -20px;
cursor: pointer;

`
const Input = styled.input`
width: 28rem ;
outline: none;
border: 0.5px solid grey ;
border-radius: 15px ;
background:transparent ;
color: white ;
height: 2rem ;
padding: 0px 0px 0px 10px;
`
/* const User = styled.div`

` */
const ImageContainer = styled.div`
display:flex ;
height: 100% ;
`

const Bell = styled.div`
cursor: pointer;
`


function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to='/' style={{ "textDecoration": "none", "color": "inherit" }}>
            <LogoIcon src={ytlogo} />
            YoutubeZ
          </Link>
        </Logo>
        <SearchDiv>
          <Input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" />
          <SearchIcon />
        </SearchDiv>
        <User>
          <Bell><NotificationsNoneIcon /></Bell>
          <ImageContainer >
            <ChannelImage src='https://www.jiomart.com/images/product/500x630/rv3jnpppl2/tony-stark-iron-man-avengers-infinity-war-men-s-sunglasses-spectacle-frames-silver-blue-product-images-rv3jnpppl2-3-202207021924.jpg' />
          </ImageContainer>
        </User>

      </Wrapper>

    </Container>
  )
}

export default Navbar
