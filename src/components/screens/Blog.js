import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import manali from "../../assets/images/manali2.jpg";
import { Helmet } from 'react-helmet';
import axios from 'axios';
import andaman from "../../assets/images/Andaman_Islands.jpg";
import athirapally from "../../assets/images/Athirappilly_Falls.jpg";

function Blog() {
    const [place,setPlace] = useState([]);
    useEffect(()=>{
        axios
            .get("https://traveller.talrop.works/api/v1/blog/")
            .then((response)=>{
                console.log(response.data.data);
                setPlace(response.data.data);
            })
            .catch((error)=>{
                console.log(error);
            })
    },[]);
    let renderItems = ()=>{
        return place.map((place)=>(
            <CardContainer>
            <HeadingTitle>{place.title}</HeadingTitle>
            <Discription>{place.description}</Discription>
            <AuthorImage src={place.author.image}/>
            <Name>{place.author.name}</Name>
            <PublishedDate><B>Published Date:</B> {place.posted_date}</PublishedDate>
        </CardContainer>
        ))
    }
  return (
    <MainContainer>
        <Helmet>
            <title>Blog | place</title>
        </Helmet>
        {renderItems()}
    </MainContainer>
  )
};

const MainContainer = styled.ul`
    width:90%;
    margin:40px auto;
`;
const CardContainer = styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow:0 0 3px #000;
    padding:50px 120px;
    margin-bottom:30px;
    border-radius:12px;
    &:first-child {
        background:url(${manali}) no-repeat;
        background-size:cover;
    }
    &:nth-child(2) {
        background:url(${andaman}) no-repeat;
        background-size:cover;
    }
    &:nth-child(3) {
        background:url(${athirapally}) no-repeat;
        background-size:cover;
    }
`;
const HeadingTitle = styled.h1`
    margin-bottom:16px;
    color:#000;
`;
const Discription = styled.p`
    align-self:flex-start;
    font-size:18px;
    margin:0 auto 45px;
    color:#000;
    font-weight:bold;
    background:#9c9ccc;
    opacity:.7;
    padding:10px 15px;
    border-radius:1%;
`;
const AuthorImage = styled.img`
    display:inline-block;
    border-radius:50%;
    width:150px;
    height:150px;
    margin-bottom:12px;
`;
const Name = styled.h3`
    font-size:22px;
    margin-bottom:8px;
    color:#fff;
`;
const PublishedDate = styled.span`
    color:#fff;
`;
const B = styled.b`
    color:#fff;
`;

export default Blog;