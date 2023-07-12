import React, { useEffect, useState } from "react";
import api from "../../services/api";
import AllPatientsData from "../../datas/AllPatientsData";
import styled from "styled-components";
import colors from '../../styles/colors'
import { useNavigate} from 'react-router-dom';

const PatientListStyle = styled.div` 
  display: flex;
  position: fixed;
  align-items:flex-start;
  justify-content: center;
  top :120px; 
  left: 28% ;
  height: 90vh;
  width: 75%;
  padding: 20px;
  padding-top: 20px;
  overflow-y: scroll;
`

const PatientListWrapper=  styled.ul`
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

const PatientRow = styled.li`
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
  
`

const PatientInfo = styled.div`
  margin : 0;
  display: flex;
  flex-direction : column;
  gap: 10px;
`
const PatientInfoRow = styled.div`
    display : flex;
    align-items : center;
    gap:20px,
    margin: 0;
    h4{
      margin:0;
      color :#072549;
      margin-right: 20px;
    }
`;

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  console.log(  AllPatientsData[0].id);


  
  useEffect(() => {
    try {

      const fetchPatients = async () => {
        const response = await api.getPatients();
        const res = response.data;
        console.log(res);
        setPatients(response.data);
      };
      // fetchPatients();

      
    } catch (error) {
      console.log(error);
    }
  }, []);
  const navigate = useNavigate();

  const handlePatientClick = () => {
    navigate('/patient');  
    console.log('click');   
  };


  
    return (
      <PatientListStyle>
        <PatientListWrapper>
          {AllPatientsData.map((patient) => (
            <PatientRow key={patient.id} onClick={handlePatientClick}>
              <PatientInfo>
                <PatientInfoRow><h4>ID:</h4> <div>{patient.id} </div></PatientInfoRow>
                <PatientInfoRow><h4>Name:</h4> <div>{patient.name}</div></PatientInfoRow>
                <PatientInfoRow><h4>Gender:</h4> <div>{patient.gender}</div> </PatientInfoRow>
                <PatientInfoRow><h4>Birthday:</h4><div>{patient.birthday}</div> </PatientInfoRow>
              </PatientInfo>
            </PatientRow>
          ))}
        </PatientListWrapper>
      </PatientListStyle>
    );
  };
export default PatientList;
