import { useState } from 'react'
import styled from "styled-components"
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Menu from "./Components/Menu.jsx"
import Content from "./Components/Content.jsx"
import { darkTheme, lightTheme } from '../utils/Theme.js';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home.jsx';
import Videos from '../pages/Videos.jsx';
import SignIn from '../pages/SignIn';



const Container = styled.div`
  display : flex;
`
const MenuContainer = styled.div`
  flex:0.5 ;
  background-color:#202020;
  height:100vh;
  position:sticky ;
  top: 0px ;
  margin : 0px;
  color:white
`
const MainContent = styled.div`
  flex:7;
  background-color: #202020;
`

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <BrowserRouter>
          <MenuContainer>
            <Menu />
          </MenuContainer>
          <MainContent>
            <Navbar />
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path='signin' element={<SignIn />} />
                <Route path="video" >
                  <Route path="test" element={<Videos />} />
                </Route>
              </Route>
            </Routes>

          </MainContent>

        </BrowserRouter>
      </Container>

    </ThemeProvider>
  )
}

export default App
