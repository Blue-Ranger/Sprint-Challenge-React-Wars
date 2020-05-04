import React from "react";
import styled from "styled-components";
import DeeperComponent from "./DeeperComponent";

const WrapperDiv = styled.div`
  margin: auto;
  width: 80%;
  height: 80%;
  text-align: center;
  background-color: black;
  color: white;
`;

const Character = (props) => {
  return (
    <WrapperDiv>
      <h1>Name: {props.someData.name}</h1>
      <h1>Birth Date: {props.someData.birth_year}</h1>
      <h1>Gender: {props.someData.gender}</h1>
      <h1>Height: {props.someData.height}</h1>
      <h1>Hair Color: {props.someData.hair_color}</h1>

      <DeeperComponent />
    </WrapperDiv>
  );
};

export default Character;
