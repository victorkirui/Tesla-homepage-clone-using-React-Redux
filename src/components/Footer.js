import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <FooterContainer>
            <Link to="#">No rights reserved | Demo purposes</Link>
            <Link to="#">Privacy & Legal</Link>
            <Link to="#">Contact</Link>
            <Link to="#">Careers</Link>
            <Link to="#">News</Link>
            <Link to="#">Engage</Link>
            <Link to="#">Locations</Link>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:60px;
    a{
        text-decoration:none;
        padding:10px 12px;
        font-size:13px;
        border-radius:15px;
    }
    @media (max-width:768px){
        flex-direction:column;
    }
`
