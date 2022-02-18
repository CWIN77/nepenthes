import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Post from '../components/Post';
import {Container,Title} from './PublicRouterStyle'
import { getBookmarkData } from '../firebase/firestore'

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  height:auto;
  padding-left: 16px;
`
const NotExist = styled.div`
  width:100%;
  height:80%;
  font-size: 16px;
  display:flex;
  align-items: center;
  justify-content: center;
  color:rgba(255,255,255,0.6);
`

function Bookmark() {
  const [post,setPost] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(()=>{
    if(user){
      getBookmarkData(user.uid).then((result)=>{setPost(result)});
    }
  },[])

  return (
    <Container>
      <Title>Bookmark</Title>
      {
        user
        ? (
          <>
            {
              !(post && post != []) &&
              <NotExist>북마크한 게시물이 없습니다.</NotExist>
            }
            <PostContainer>
              {
                post &&
                post.map((data,key)=>{
                  return <Post key={key} data={data} />
                })
              }
            </PostContainer>
          </>
        )
        : <NotExist>로그인 후 북마크가 가능합니다.</NotExist>
      }
    </Container>
  );
}

export default Bookmark;
