import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Container,Title} from './PublicRouterStyle'
import { getHomeData,getBookmarkData,getMyPostData } from '../firebase/firestore'

const TextContainer = styled.div`
  display:flex;
  flex-direction: column;
  padding: 28px;
  padding-top: 8px;
`
const ErrMsg = styled.div`
  display:flex;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 12px;
  padding: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  width:calc(62vw - 24px);
  max-width: 250px;
  height:auto;
  padding:16px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 13px;
  margin-bottom: 30px;
`
const Content = styled.div`
  display:flex;
  flex-direction: column;
  width:calc(62vw - 24px);
  max-width: 250px;
  height:240px;
  padding:16px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 13px;
  background-color: white;
  border-radius: 12px;
  border:none;
  outline:none;
  overflow:none;
  resize:none;
  scroll-snap-stop:true;
  color:black;
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2);
`

function Detail({match}) {
  const id = match.params.id;
  const page = match.params.page;
  const [post,setPost] = useState(null);

  useEffect(()=>{
    if(page == 'home'){
      getHomeData().then((result)=>{setPost(result.filter(element => {return element.id == id})[0])});
    }else if(page == 'Bookmark'){
      getBookmarkData().then((result)=>{setPost(result.filter(element => {return element.id == id})[0])});
    }else if(page == 'profile'){
      getMyPostData().then((result)=>{setPost(result.filter(element => {return element.id == id})[0])});
    }
  },[])

  return (
    <Container>
      {
        post &&
        (
          <>
            <Title>{post.title}</Title>
            <TextContainer>
              <ErrMsg>
                {
                  post.errMsg.split('\n').map((str,key)=>{
                    return <div key={key}>{str}</div>
                  })
                }
              </ErrMsg>
              <Content>
                {
                  post.content.split('\n').map((str,key)=>{
                    return <div key={key}>{str}</div>
                  })
                }
              </Content>
            </TextContainer>
          </>
        )
      }
    </Container>
  );
}

export default Detail;
