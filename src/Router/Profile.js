import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Post from '../components/Post';
import {Container,Title} from './PublicRouterStyle'
import { getMyPostData,loginUser } from '../firebase/firestore'
import { ReactComponent as Svg_googleIcon } from '../components/svg/googleIcon.svg';

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  height:auto;
  padding-left: 16px;
`
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height:80%;
`
const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: black;
  background-color: white;
  padding: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 8px;
`
const UserImg = styled.img`
  width:28px;
  height:28px;
  border-radius: 36px;
  margin-right: 6px;
`

function Profile() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [post,setPost] = useState(null);
  
  useEffect(()=>{
    if(user){
      getMyPostData(user.uid).then((result)=>{setPost(result)});
    }
  },[user])

  return (
    <Container>
      {
        user
        ? <Title><UserImg src={user.photoURL} />{user.displayName}</Title>
        : <Title>Login</Title>
      }
      {
        user 
        ? (
          <PostContainer>
            {/* <div onClick={()=>{localStorage.removeItem('user')}}>로그아웃</div>
            <div onClick={()=>{console.log(user.uid)}}>유저</div> */}
            {
              post &&
              post.map((data,key)=>{
                return <Post key={key} data={data} />
              })
            }
          </PostContainer>
        )
        : (
          <LoginContainer>
            <Login onClick={()=>{loginUser().then((result)=>{setUser(result)})}}><Svg_googleIcon style={{width:20,height:20,marginRight:4}} />Sign in with Goole</Login>
          </LoginContainer>
        )
      }
    </Container>
  );
}

export default Profile;
