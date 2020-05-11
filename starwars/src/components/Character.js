import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  margin: auto;
  width: 80%;
  height: 80%;
  text-align: center;
  background-color: black;
  color: white;
  opacity: 0.9;
`;

const Character = (props) => {
  return (
    <div>
      {props.someData.map((data) => {
        return (
          <WrapperDiv key={data.id}>
            <h1>Name: {data.name}</h1>
            <h1>Birth Date: {data.birth_year}</h1>
            <h1>Gender: {data.gender}</h1>
            <h1>Height: {data.height}</h1>
            <h1>Hair Color: {data.hair_color}</h1>
          </WrapperDiv>
        );
      })}
    </div>
  );
};

export default Character;
