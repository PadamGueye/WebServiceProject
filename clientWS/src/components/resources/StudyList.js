import React, { useEffect, useState } from "react";
import api from "../../services/api";
import PatientData from "../../datas/PatientData";
import { styled } from "styled-components";
import { useNavigate} from 'react-router-dom';
import colors from "../../styles/colors";

const PatientStudy = PatientData;


const StudyListStyle = styled.div` 
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

const StudyListWrapper=  styled.ul`
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

const StudyRow = styled.li`
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
const StudyList = () => {
  const [studies, setStudy] = useState([]);
  
  useEffect(() => {
    try {

      const fetchStudy = async () => {
        const response = await api.getStudy();
        const res = response.data;
        console.log(res);
        setStudy(response.data);
      };
      // fetchStudy();
    } catch (error) {
      console.log(error);
    }


  }, []);

  const navigate = useNavigate();

  const handleStudyClick = () => {
    navigate('/study');  
    console.log('click');   
  };


  return (
    <div>
      <StudyListStyle>
        <StudyListWrapper>
          {PatientStudy.Studies.map((study) => (
            <StudyRow key={study} onClick={handleStudyClick}><h4>ID Study</h4> : {study}</StudyRow>
          ))}
        </StudyListWrapper>
      </StudyListStyle>
    </div>
  );
};

export default StudyList;
