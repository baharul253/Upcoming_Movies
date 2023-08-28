import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 90%;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-self: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const FooterContaier = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: #fbbc04;
  flex-wrap: wrap;
  margin: 0% 7% 1% 6%;
  ${"" /* justify-content:center; */}
`;
const PrevButton = styled.button`
  width: 10%;
  margin: 1%;
`;
const NextButton = styled.button`
  position: absolute;
  right: 95px;
  width: 10%;
  margin: 1%;

  justify-content: right;
`;
const ParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
  box-shadow: 0px 2px 3px #9b9b9b;
  margin: 0% 7% 1% 6%;
`;
const SearchDiv = styled.div`
  flex: 0.6;
  width: 100%;
  margin: 1%;
`;
const HomeDiv = styled.div`
  flex: 0.4;
  justify-content: flex-end;
  display: flex;
  padding-right: 2%;
  margin: 1%;
`;
const MovieDetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  width: 87%;
  flex-wrap: wrap;
  margin: 0% 8% 1% 6%;
  background-color: #dfdfdf;
`;
const LabelDiv = styled.div`
  align: left;
  outline: none;
  border: none;
  width: 100%;
  font-weight: bold;
`;
const SearchbarContainer = styled.div`
  background-color: #dfdfdf;
  border-radius: 5px;
  padding: 4px;
  height: 90%;
  position: relative;
`;
const InputField = styled.input`
  background-color: #dfdfdf;
  outline: none;
  border: none;
  width: 100%;
  font-weight: bold;
`;
const ArrowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  width: 87%;
  flex-wrap: wrap;
  margin: 0% 8% 1% 6%;
`;
export {
  MovieContainer,
  Container,
  StyledLink,
  FooterContaier,
  PrevButton,
  NextButton,
  ParentContainer,
  SearchDiv,
  HomeDiv,
  MovieDetailsDiv,
  LabelDiv,
  SearchbarContainer,
  InputField,
  ArrowDiv,
};
