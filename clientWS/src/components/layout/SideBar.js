import React from "react";
import styled from "styled-components";
import AllPatientsData from "../../datas/AllPatientsData";
import PatientData from "../../datas/PatientData";
import StudyData from "../../datas/StudyData";
import SerieData from "../../datas/SerieData";
import fontStyle from "../../styles/fontStyle";
import colors from "../../styles/colors";
import { useNavigate } from "react-router-dom";



const patients = AllPatientsData;
const SideBarStyle = styled.div`
color:#FFF;
width: 250px;
background-color: #464A60;
padding: 20px;
padding-top: 60px;
height: 100%;
position: fixed;
left: 0;
top: 0;
overflow-y: auto;
`;
const SideBarTitle= styled.h2`
font-size: 18px;
margin-bottom: 10px;
`;

const SideBarFields= styled.ul`
  list-style: none;
  padding: 0;
  display : flex;
  flex-direction: column;
  gap: 10px;
`;

const SideBarField= styled.li`
  margin-bottom: 5px; 
  padding: 10px 20px;

`;
const ButtonStyled = styled.button`
  ${fontStyle.Body}
  color: ${colors.colorLight};
  display: flex;
  justify-content:center;
  align-items:center;
  text-decoration: none;
  border-radius: 30px;
  background-color: ${colors.primary};
  padding: 10px 50px;
  border: none;
  margin: 20px 0;
  margin-top: 30px;
  position : fixed;
  bottom : 20px;
  left: 40px;

  &:hover {
    transition: 0.5s;
    box-shadow: 0 0 8px ${colors.primary};
  }
`;
const countPatients = () => {
  return patients.length;
};

const countFemalePatients = () => {
  return patients.filter((patient) => patient.gender === "Female").length;
};

const countMalePatients = () => {
  return patients.filter((patient) => patient.gender === "Male").length;
};



const Sidebar = ({ type }) => {
  const navigate = useNavigate();

  const renderContent = () => {
    if (type === "patients") {
      return (
        <div>
          <SideBarTitle>All patients</SideBarTitle>
          <SideBarField>Nombre total de patients : {countPatients()}</SideBarField>
          <SideBarField>Nombre de femmes : {countFemalePatients()}</SideBarField>
          <SideBarField>Nombre d'hommes : {countMalePatients()}</SideBarField>
        </div>  
      );
    } else if (type === "patient") {
      const patient = PatientData;
      return (
        <div>
          <SideBarTitle>Patient Details</SideBarTitle>
          <SideBarField>ID: {patient.ID}</SideBarField>
          <SideBarField>Name: {patient.MainDicomTags.PatientName}</SideBarField>
          <SideBarField>Gender: {patient.MainDicomTags.PatientSex}</SideBarField>
          <SideBarField>Birthday: {patient.MainDicomTags.PatientBirthDate}</SideBarField>
          <ButtonStyled  onClick={()=>{navigate('/patients')}} >Envoyer Patient</ButtonStyled>
        </div>)

    } else if (type === "study") {
      const study = StudyData;
    return (
      <div>
        <SideBarTitle>Study Details</SideBarTitle>
        <SideBarField>ID: {study.ID}</SideBarField>
        <SideBarField>Accession Number: {study.MainDicomTags.AccessionNumber}</SideBarField>
        <SideBarField>Study Date: {study.MainDicomTags.StudyDate}</SideBarField>
        <SideBarField>Study Description: {study.MainDicomTags.StudyDescription}</SideBarField>
        <SideBarField>Study ID: {study.MainDicomTags.StudyID}</SideBarField>
        <SideBarField>Study Instance UID: {study.MainDicomTags.StudyInstanceUID}</SideBarField>
        <SideBarField>Study Time: {study.MainDicomTags.StudyTime}</SideBarField>
      </div>
    );
    } else if (type === "serie") {const serie = SerieData;
      return (
        <div>
          <SideBarTitle>Serie Details</SideBarTitle>
          <SideBarField>ID: {serie.ID}</SideBarField>
          <SideBarField>Body Part Examined: {serie.MainDicomTags.BodyPartExamined}</SideBarField>
          <SideBarField>Manufacturer: {serie.MainDicomTags.Manufacturer}</SideBarField>
          <SideBarField>Modality: {serie.MainDicomTags.Modality}</SideBarField>
          <SideBarField>Series Date: {serie.MainDicomTags.SeriesDate}</SideBarField>
          <SideBarField>Series Description: {serie.MainDicomTags.SeriesDescription}</SideBarField>
          <SideBarField>Series Instance UID: {serie.MainDicomTags.SeriesInstanceUID}</SideBarField>
          <SideBarField>Series Number: {serie.MainDicomTags.SeriesNumber}</SideBarField>
          <SideBarField>Series Time: {serie.MainDicomTags.SeriesTime}</SideBarField>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  return (
    <SideBarStyle>
      <SideBarFields>
      <SideBarFields>{renderContent()}</SideBarFields>
      </SideBarFields>
    </SideBarStyle>
  );
};

export default Sidebar;
