import { useEffect } from 'react';
import styled from 'styled-components'
import Post from '../components/Post';
import {Container,Title} from './PublicRouterStyle'
import firebase from '../firebase';

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  padding-left: 16px;
`

function Home() {
  const db = firebase.firestore();

  useEffect(()=>{
    
  })

  return (
    <Container>
      <Title style={{width:68}}>Home</Title>
      <PostContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostContainer>
    </Container>
  );
}

export default Home;
