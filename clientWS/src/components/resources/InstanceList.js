import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { styled } from "styled-components";
import SerieData from "../../datas/SerieData";
const SerieInstances = SerieData;




const InstanceListStyle = styled.div` 
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

const InstanceListWrapper=  styled.ul`
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

const InstanceRow = styled.li`
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
        color :#FFF;
      }
  }
  h4{
      margin:0;
      color :#072549;
      margin-right: 20px;
      
    }
  
`
const InstanceList = () => {
  const [instances, setInstance] = useState([]);
  
  useEffect(() => {
    try {

      const fetchInstance = async () => {
        const response = await api.getInstance();
        const res = response.data;
        console.log(res);
        setInstance(response.data);
      };
      // fetchInstance();

      
    } catch (error) {
      console.log(error);
    }


  }, []);


  const handleInstanceClick = () => {
    console.log('click');   
  };


  return (
    <InstanceListStyle>
        <InstanceListWrapper>
          {SerieInstances.Instances.map((Instance) => (
            <InstanceRow key={Instance} onClick={handleInstanceClick}><h4>ID Instance</h4>: <a href="slicer://viewer?1.3.6.1.4.1.14519.5.2.1.1188.4001.866856253970500879015300047605=studyInstanceUID&dicomweb_endpoint=http%3a%2f%2flocalhost%3a8042%2fdicom-web">{Instance}</a></InstanceRow>
          ))}
        </InstanceListWrapper>
      </InstanceListStyle>
  );
};

export default InstanceList;
