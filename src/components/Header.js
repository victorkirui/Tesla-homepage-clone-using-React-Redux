import React,{ useState,useEffect } from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
    const [mobileOpen,setMobileOpen] = useState(false);
    const [scroll,setScroll] = useState(false);

    const cars = useSelector(selectCars);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 60){
                setScroll(true)
            }else{
                setScroll(false)
            }
        });

        return ()=>{
            window.removeEventListener('scroll')
        }

    },[])

    return (
        <HeaderContainer scroll={scroll} >
            <img src='./images/logo.svg' alt="logo"/>
            <Menu>
                { cars && cars.map((car,index) => (
                    <Link to="#" key={index}>{car}</Link>
                ))}
                    <Link to="#">Solar Roof</Link>
                    <Link to="#">Solar Panels</Link>
            </Menu>
            <RightMenu>
                <RightLeftMenu>
                    <Link to="#">Shop</Link>
                    <Link to="#">Account</Link>
                </RightLeftMenu>
                <Link to="#" onClick={() => setMobileOpen(true)}>Menu</Link>
            </RightMenu>
            <MobileMenu showMobileMenu = {mobileOpen}>
                <CloseWrap>
                    <Close onClick={() => setMobileOpen(false)}/>
                </CloseWrap>
                { cars && cars.map((car,index)=>(
                    <Link to="#" key={index}>{car}</Link>
                ))}
                <Link to="#">Solar Roof</Link>
                <Link to="#">Solar Panels</Link>
                <Link to="#">Existing Inventory</Link>
                <Link to="#">Used Inventory</Link>
                <Link to="#">Trade-In</Link>
                <Link to="#">Tst Drive</Link>
                <Link to="#">Power Wall</Link>
            </MobileMenu>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    max-height:60px;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:10;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:10px 25px;
    background: ${props => props.scroll ? "#fff" : "transparent"};
    transition:all 0.4s;
    img{
        height:20px;
        cursor:pointer;
    }
`
const Menu = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    a{
        text-decoration:none;
        padding:10px 12px;
        font-size:15px;
        border-radius:15px;
        background:transparent;
        font-weight:500;
        &:hover{
            background:rgba(0,0,0,0.1);
            transition:all 0.5s;
        }
        @media (max-width:1100px){
            display:none;
        }
    }
`
const RightMenu = styled.div`
    display:flex;
    a{
        text-decoration:none;
        padding:10px 12px;
        font-size:15px;
        border-radius:15px;
        font-weight:500;
        background:transparent;
        &:hover{
            background:rgba(0,0,0,0.1);
            transition:all 0.5s;
        }
    }
`
const RightLeftMenu = styled(Menu)`
    @media (max-width:1100px){
        display:none;
    }
`
const MobileMenu = styled.div`
    width:300px;
    background:#fff;
    position:fixed;
    top:0;
    right:0;
    height:100vh;
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    transition:all 0.3s;
    transform: ${props => props.showMobileMenu ? "translateX(0)" : "translateX(100%)"};
    a{
        text-decoration:none;
        padding:10px 20px;
        font-size:15px;
        border-radius:15px;
        font-weight:500;
        background:transparent;
        width:250px;
        text-align:left;
        &:hover{
            background:rgba(0,0,0,0.1);
            transition:all 0.5s;
        }
    }
`
const CloseWrap = styled.div`
    display:flex;
    justify-content:flex-end;
    width:100%;
    margin-bottom:30px;
`
const Close = styled(CloseIcon)`
    cursor:pointer;
    margin-right:20px;
`
