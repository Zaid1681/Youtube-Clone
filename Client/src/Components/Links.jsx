import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Item = styled.div`
display: flex;
gap: 20px ;
padding : 7px 20px ;
cursor:pointer ;
`
const Hr = styled.div`
height : 2px;
background-color : #303030;
margin : 20px 0px ;
`
const MenuIcons = styled.div`
display: flex ;
align-items: center ;
width: 10px;
`
const MenuSignin = styled.div`
padding : 2px 20px ;
width:100% ;
height: 100px;
`
const Links = () => {
    return (
        <div>
            <Item>
                <MenuIcons><HomeIcon /></MenuIcons>
                Home
            </Item>
            <Item>
                Shorts
            </Item>
            <Item>
                Subscription
            </Item>
            <Hr />
            <Item>
                Library
            </Item>
            <Item>
                History
            </Item>
            <Item>
                Your Videos
            </Item>
            <Item>
                Watch Later
            </Item>
            <Item>
                Liked Videos
            </Item>
            <Item>
                Show More
            </Item>
            <Hr />
            <MenuSignin>
                <p style={{fontSize: "15px"}}>Sign in to like vidoes , comments and subscribe</p>
                <Link to='/signin'>
                <button className="btn btn-outline-primary" style={{color: "white" , width: "100px" }}>Sign in</button>
                </Link>

            </MenuSignin>
            <Hr />
            <p style={{ "font-weight": "bold" }}>Explore</p>
            <Item>
                Trending
            </Item>
            <Item>
                Music
            </Item>
            <Item>
                Movies
            </Item>
            <Item>
                Live
            </Item>
            <Item>
                Gaming
            </Item>
            <Item>
                News
            </Item>
            <Item>
                Sports
            </Item>
            <Item>
                Learning
            </Item>
            <Item>
                Fashion Beauty
            </Item>
            <Hr />
            <p style={{ "font-weight": "bold"  }}>More From Youtube</p>
            <Item>
                Youtube Premium
            </Item>
            <Item>
                Youtube Music
            </Item>
            <Item>
                Create Studio Premium
            </Item>
            <Hr />
            <Item>
                Setting
            </Item>
            <Item>
                Report History
            </Item>
            <button className='btn btn-primary' onClick={() => { setDarkMode(!darkMode) }}></button>

        </div>
    )
}

export default Links
