import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Container,Title} from './PublicRouterStyle'

function Detail({match}) {
  const param = match.params;
  useEffect(()=>{
    console.log(param)
  },[])

  return (
    <Container>
      <Title style={{borderBottom:'none'}}>Write</Title>
      
    </Container>
  );
}

export default Detail;
