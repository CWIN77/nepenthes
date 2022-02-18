import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 260px;
  height:146.25px;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 48px;
  margin-top: 12px;
  border-radius: 12px;
  box-shadow: 0px 8px 20px 4px rgba(0, 0, 0, 0.20);
  cursor: pointer;
`
const ErrMsg = styled.div`
  display: flex;
  padding: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  height:100%;
  font-size: 13px;
  color:black;
  font-weight: 500;
  background-color: white;
  border-radius: 0px 0px 15px 15px;
`
const Bar = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  background-color: initial;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 15px 15px 0px 0px;
`
const Title = styled.div`
  font-size: 13px;
  padding: 6px;
  font-weight: 500;
  color:white;
`
const Menu = styled.div`
  width:15px;
  height:15px;
  /* border:2.5px solid white; */
  background-color: white;
  border-radius: 10px;
`

function Post({data}) {
  const path = window.location.pathname != '/' ? window.location.pathname : '/home'
  
  return (
    <Container>
      <Bar>
        <div style={{display:'flex'}}>
          <Link style={{textDecoration:'none',color:'black'}} to={`/detail${path}/${data.id}`}>
            <Title>{data.title}</Title>
          </Link>
        </div>
        <Menu/>
      </Bar>
      <Link style={{textDecoration:'none',color:'black',height:'100%'}} to={`/detail${path}/${data.id}`}>
        <ErrMsg>{data.errMsg}</ErrMsg>
      </Link>
    </Container>
  );
}

export default Post;
