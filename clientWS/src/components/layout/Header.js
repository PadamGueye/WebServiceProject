import React from "react";
import logo from "../../assets/logo.png";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

const HeaderStyle = styled.div`
  background-color: #072549;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  10px;
  font-weight: bold;
  color: #ffffff;
  position: fixed;
  top: 0;
  width: 100%; 
  margin: 0;
  z-index: 100;
`;

const HeaderLeft = styled.div`
  display: flex;
  cursor:pointer;
  align-items: center;
  gap :20px;
`;

const HeaderRight = styled.div`
  padding-right: 30px;
`;

const HeaderLeftImage = styled.img`
  max-width: 38px;
`;



const Header = () => {
  const navigate = useNavigate();

  return <header>
            <HeaderStyle>
                <HeaderLeft onClick={ () => {navigate("/")  }}>
                  <div><HeaderLeftImage src={logo} alt="Logo"/></div>
                  <div>Service Médical ESP</div>
                </HeaderLeft>
                <div><h2>Dashboard médecin</h2></div>
                <HeaderRight>
                    Papa Adama GUEYE  
                </HeaderRight>
          </HeaderStyle>
        </header>;
};

export default Header;
