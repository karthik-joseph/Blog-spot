import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

export default function PageNotFound() {
  return (
    <>
    <Helmet>
        <title>Page Not Found</title>
    </Helmet>
    <Page>Page Not Found! :)</Page>
    </>
  )
};

const Page = styled.h1`
    font-size:74px;
    text-align:center;
    margin-top:10%;
`;