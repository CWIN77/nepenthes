import { useState } from 'react'
import styled from 'styled-components'
import {Container,Title} from './PublicRouterStyle'
import { uploadPost } from '../firebase/firestore'

const WriteContainer = styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const TitleInput = styled.input`
  display:flex;
  width:62vw;
  max-width: 260px;
  padding:8px;
  font-size: 18px;
  background-color: initial;
  border: none;
  outline: none;
  color:white;
  border-bottom: 3px solid white;
  margin-bottom: 20px;
`
const ErrMsgInput = styled.textarea`
  display:flex;
  width:calc(62vw - 24px);
  max-width: 250px;
  height:120px;
  padding:16px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 12px;
  background-color: initial;
  border-radius: 12px;
  border:none;
  outline:none;
  overflow:none;
  resize:none;
  scroll-snap-stop:true;
  color:white;
  margin-top: 12px;
  max-height:70vh;
  background-color: initial;
  border: 2px solid white;
  &::-webkit-scrollbar{
    width:0px;
  }
`
const ContentContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width:58vw;
  max-width: 320px;
  /* box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2); */
  margin: 30px;
  height:350px;
`
const ContentInput = styled.textarea`
  width:100%;
  height:200px;
  padding:18px;
  padding-top: 14px;
  padding-bottom: 14px;
  border:none;
  outline:none;
  overflow:none;
  resize:none;
  color:white;
  font-size: 13px;
  border-radius: 12px;
  scroll-snap-stop:true;
  background-color: initial;
  border: 2px solid white;
  &::-webkit-scrollbar{
    width:0px;
  }
`
const TopArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
`
const PostBtn = styled.div`
  margin: 40px;
  margin-bottom: 0px;
  font-size: 16px;
  padding: 14px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
  color: black;
  border-radius: 12px;
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

function Write() {
  const user = JSON.parse(localStorage.getItem('user'));

  const useInput = (initialValue) => {
    const [value,setValue] = useState(initialValue);
    const onChange = (e) => {
      setValue(e.target.value);
    }
    return {value,onChange}
  }

  const title = useInput('');
  const errMsg = useInput('');
  const content = useInput('');

  return (
    <Container>
      <Title style={{width:60}}>Write</Title>
      {
        user 
        ? (
          <WriteContainer>
            <TopArea>
              <TitleInput maxLength={30} {...title} placeholder='제목을 입력해주세요.' />
              <ErrMsgInput {...errMsg} placeholder='에러메세지를 입력해주세요.' />
            </TopArea>
            <ContentContainer>
              <ContentInput {...content} placeholder='설명을 입력해주세요.' />
              {/* <div>
                {
                  explaneValue.value.split('\n').map((str,key)=>{
                    return <div key={key}>{str}</div>
                  })
                }
              </div> */}
              <PostBtn onClick={()=>{uploadPost(title.value,errMsg.value,content.value,user.uid)}}>게시</PostBtn>
            </ContentContainer>
          </WriteContainer>
        )
        : <NotExist>로그인 후 글작성이 가능합니다.</NotExist>
      }
    </Container>
  );
}

export default Write;
