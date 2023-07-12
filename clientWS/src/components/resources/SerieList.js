import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {styled} from 'styled-components';
import PatientData from "../../datas/PatientData";
import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";


const PatientSerie = PatientData;
const SerieListStyle = styled.div` 
  display: flex;
  position: fixed;
  justify-content: center;
  top :70px; 
  left: 28% ;
  height: 90vh;
  width: 75%;
  padding: 20px;
  padding-top: 20px;
  overflow-y: scroll;
`

const SerieListWrapper=  styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
  padding :0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`

const SerieRow = styled.li`
  border-radius: 8px;
  padding: 15px;
  gap: 10px;
  width: 80%;
  border: solid 1px #D9D9D9;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin : 0;
  background: #D9D9D9;
  &: hover{
    background: #464A60;
    color : #FFF;
    h4{
        color :${colors.primary};
      }
  }
  h4{
      margin:0;
      color :#072549;
      margin-right: 20px;
      
    }
  
`

const SerieList = () => {
  const [series, setSerie] = useState([]);
  
  useEffect(() => {
    try {

      const fetchSerie = async () => {
        const response = await api.getSerie();
        const res = response.data;
        console.log(res);
        setSerie(response.data);
      };
      // fetchSerie();

      
    } catch (error) {
      console.log(error);
    }


  }, []);

  const navigate = useNavigate();

  const handleSerieClick = () => {
    navigate('/serie');  
    console.log('click');   
  };

  return (
    <SerieListStyle>
      <SerieListWrapper>
        {PatientSerie.Studies.map((Serie) => (
          <SerieRow key={Serie} onClick={handleSerieClick}><h4>ID Serie </h4>: {Serie}</SerieRow>
        ))}
      </SerieListWrapper>
    </SerieListStyle>
  );
};

export default SerieList;
