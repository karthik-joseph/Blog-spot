import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import mainLogo from '../assets/images/moke.png';
import twitterIcon from '../assets/images/twitter.png';
import instagramIcon from '../assets/images/instagram.png';
import { Helmet } from 'react-helmet';

function Header() {
  return (
    <>
    <Helmet>
        <title>Blog spot</title>
    </Helmet>
    <MainContainer>
        <Image src={mainLogo} alt='logo' />
        <SectionRight>
            <Items>
                <Link to='get_signal'>Get signal</Link>  
            </Items>
            <Items>
                <Link to='support'>Support</Link>
            </Items>
            <Items>
                <Link to='blog' title='Click on To visit Places'>Blog</Link>
            </Items>
            <Items>
                <Link to='developers'>Developers</Link>
            </Items>
            <Items>
                <Link to='careers'>Careers</Link>
            </Items>
            <Items>
                <Link to='donate'>Donate</Link>
            </Items>
            <Items>
                <Link to='https://www.x.com' target='_blank'><TwitterIcon src={twitterIcon} alt='twitter' /></Link>
            </Items>
            <Items>
                <Link to='https://www.instagram.com' target='_blank'><InstaIcon src={instagramIcon} alt='instagram' /></Link>
            </Items>
        </SectionRight>
    </MainContainer>
    </>
  )
};

const MainContainer = styled.div`
    width:90%;
    height:90px;
    margin:0 auto;
    padding:0 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid #000;
    margin-top:10px;
    border-radius:55px;
    box-shadow:-2px 2px 6px #000;
    &:hover {
        box-shadow:2px -2px 6px #000;
    }
`;
const Image = styled.img`
    display:block;
    height:64px;
`;
const SectionRight = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const Items = styled.li`
    margin-right:16px;
    &:last-child {
        margin-right:0;
    }
`;
const Link = styled(NavLink)`
    color:#000;
    font-size:16.5px;
    font-family: 'poppins bold';
`;
const TwitterIcon = styled.img`
    display:block;
`;
const InstaIcon = styled.img`
    display:block;
`;

export default Header;