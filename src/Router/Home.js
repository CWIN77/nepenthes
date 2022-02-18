import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Post from '../components/Post';
import {Container,Title} from './PublicRouterStyle'
import { getHomeData } from '../firebase/firestore'

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  height:auto;
  padding-left: 16px;
`

function Home() {
  const [post,setPost] = useState(null);
  const [loading,setLoading] = useState(false)
  
  useEffect(()=>{
    getHomeData().then((result)=>{setPost(result)});
  },[])

  window.addEventListener('scroll',(e)=>{
    if(!loading){
      if(window.scrollY > document.body.scrollHeight - window.innerHeight - 200){
        setLoading(true);
        getHomeData('add').then((result)=>{
          setPost(result);
          setLoading(false);
        });
      }
    }
  })

  return (
    <Container>
      <Title>Home</Title>
      <PostContainer>
        {
          post &&
          post.map((data,key)=>{
            return <Post key={key} data={data} />
          })
        }
      </PostContainer>
    </Container>
  );
}

export default Home;
