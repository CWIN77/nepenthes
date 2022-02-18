import styled from 'styled-components'
import { ReactComponent as Svg_logo } from './svg/logo.svg';
import { ReactComponent as Svg_home } from './svg/home.svg';
import { ReactComponent as Svg_home_focus } from './svg/home_focus.svg';
import { ReactComponent as Svg_edit } from './svg/edit.svg';
import { ReactComponent as Svg_edit_focus } from './svg/edit_focus.svg';
import { ReactComponent as Svg_search } from './svg/search.svg';
import { ReactComponent as Svg_search_focus } from './svg/search_focus.svg';
import { ReactComponent as Svg_bookmark } from './svg/bookmark.svg';
import { ReactComponent as Svg_bookmark_focus } from './svg/bookmark_focus.svg';
import { ReactComponent as Svg_profile } from './svg/profile.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right:0px;
  bottom:0px;
  background-color: #CA3334;
  height:100%;
  width:70px;
`
const NavBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
`
const ProfileImg = styled.img`
  width :24px;
  height:24px;
  border-radius: 100px;
  padding: 14px;
`

function NavBar() {
  const svg_current = {width:24, height:24, fill:'white',style:{padding:14}}
  const [pathname,setPathName] = useState(window.location.pathname);
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Container>
      <Svg_logo style={{paddingTop:'22px'}} />
      <NavBtnWrapper>
        <Link to="/profile" onClick={() => {setPathName('/profile')}}>
          {
            user
            ? (
              pathname == '/profile'
              ? (
                <div style={{padding:14}}>
                  <ProfileImg style={{boxShadow:'0px 0px 0px 2.5px white',padding:0}} src={user.photoURL} />
                </div>
              )
              : <ProfileImg src={user.photoURL} />
            )
            : <Svg_profile {...svg_current} />
          }
        </Link>
        <Link to="/bookmark" onClick={() => {setPathName('/bookmark')}}>
          {
            pathname == '/bookmark' 
            ? <Svg_bookmark_focus {...svg_current} />
            : <Svg_bookmark {...svg_current} />
          }
        </Link>
        <Link to="/write" onClick={() => {setPathName('/write')}}>
          {
            pathname == '/write'
            ? <Svg_edit_focus {...svg_current} />
            : <Svg_edit {...svg_current} />
          }
        </Link>
        <Link to="/search" onClick={() => {setPathName('/search')}}>
          {
            pathname == '/search' 
            ? <Svg_search_focus {...svg_current} />
            : <Svg_search {...svg_current} />
          }
        </Link>
        <Link to="/" onClick={() => {setPathName('/')}}>
          {
            pathname == '/'
            ? <Svg_home_focus {...svg_current} />
            : <Svg_home {...svg_current} />
          }
        </Link>
      </NavBtnWrapper>
    </Container>
  );
}

export default NavBar;
