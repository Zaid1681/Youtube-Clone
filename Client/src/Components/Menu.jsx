import React from 'react'
import styled from 'styled-components'
import "./Menu.css"
import Links from "./Links.jsx"
import ytlogo from "../../asset/ytlogo.png"
import MenuIcon from '@mui/icons-material/Menu';
import * as theme from "../../utils/Theme.js";
import HomeLinks from './HomeLinks'



const Logo = styled.div`
padding : 0px 10px;
display:flex;
`
const Wrapper = styled.div`
display: flex; 
margin: 0px ;
flex-direction :  column;
`
const Img = styled.div`
max-width : 20px;
width: 10px;
margin-right: 7px
`

const Container = styled.div`
background-color: ${({ theme }) => theme.bg} ;
color : ${({ theme }) => theme.text};
margin: 0px ;
`

function Menu() {
  return (
    <div className='menu'>
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><MenuIcon /></button>
      <HomeLinks />
      <div class="offcanvas offcanvas-start" data-bs-scroll="true"
        tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-body">
          <Wrapper>
            <Logo>
              <img className='ytLogo' src={ytlogo} alt="" />
              <p className='zaidYt' >YoutubeZ</p>
              <div class="offcanvas-header ">
                <button type="button" class="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
            </Logo>
            <Links />
          </Wrapper>
          <h1></h1>
        </div>
      </div>
    </div>

  )
}

export default Menu;
