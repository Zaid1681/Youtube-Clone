import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';


const Link = styled.div`
display: flex ;
flex-direction: column ;
align-items:center ;
justify-content: center ;
margin:  auto;
cursor: pointer;

`
const A = styled.div`
text-decoration: none ;
`
const Container = styled.div`
  display : flex;
  flex-direction: column;
  gap: 3rem;
  font-size: 0.7rem ;
  
`
const HomeLinks = () => {
     return (
          <Container>
               <Link>
                    <HomeIcon />
                    <A href="">Home</A>
               </Link>
               <Link>
                    <HomeIcon />
                    <A href="">Shorts</A>
               </Link>
               <Link>
                    <SubscriptionsIcon />
                    <A href="">Subscription</A>
               </Link>
               <Link>
                    <LibraryAddIcon />
                    <A href="">Library</A>
               </Link>
          </Container>
     )
}

export default HomeLinks
