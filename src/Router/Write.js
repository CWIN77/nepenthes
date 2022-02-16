import { useState } from 'react'
import styled from 'styled-components'
import {Container,Title} from './PublicRouterStyle'

const WriteContainer = styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const TitleInput = styled.input`
  display:flex;
  width:50vw;
  max-width: 260px;
  /* height:20px; */
  padding:8px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 15px;
  background-color: initial;
  border: none;
  outline: none;
  color:white;
  border-bottom: 3px solid white;
  margin-bottom: 30px;
`
const ErrMsgInput = styled.textarea`
  display:flex;
  width:50vw;
  max-width: 250px;
  height:20px;
  padding:16px;
  padding-top: 14px;
  padding-bottom: 14px;
  font-size: 12px;
  background-color: white;
  border-radius: 12px;
  border:none;
  outline:none;
  overflow:none;
  resize:none;
  scroll-snap-stop:true;
  color:black;
  margin-top: 12px;
  max-height:70vh;
`
const ExplaneContainer = styled.div`
  display:flex;
  width:60vw;
  max-width: 320px;
  /* box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2); */
  margin: 30px;
  height:400px;
`
const ExplaneInput = styled.textarea`
  width:100%;
  height:200px;
  padding:18px;
  padding-top: 14px;
  padding-bottom: 14px;
  border:none;
  outline:none;
  overflow:none;
  resize:none;
  color:black;
  font-size: 13px;
  border-radius: 12px;
  scroll-snap-stop:true;
`
const TopArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-right: 40px;
`

function Search() {
  const useErrMsgInput = (initialValue) => {
    const [value,setValue] = useState(initialValue);
    const onChange = (e) => {
      e.target.style.height = '20px'
      e.target.style.height = e.target.scrollHeight - 28 + 'px'
      setValue(e.target.value);
    }
    return {value,onChange}
  }
  const useExplaneInput = (initialValue) => {
    const [value,setValue] = useState(initialValue);
    const onChange = (e) => {
      e.target.style.height = '200px'
      e.target.style.height = e.target.scrollHeight - 28 + 'px'
      setValue(e.target.value);
    }
    return {value,onChange}
  }

  const [titleValue,setTitleValue] = useState('');
  const errMsgValue = useErrMsgInput('');
  const explaneValue = useExplaneInput('');

  return (
    <Container>
      <Title style={{width:60}}>Write</Title>
      <WriteContainer>
        <TopArea>
          <TitleInput maxLength={30} value={titleValue} onChange={(e)=>{setTitleValue(e.target.value)}} placeholder='제목을 입력해주세요.' />
          <ErrMsgInput {...errMsgValue} placeholder='에러메세지를 입력해주세요.' />
        </TopArea>
        <ExplaneContainer>
          <ExplaneInput {...explaneValue} placeholder='설명을 입력해주세요.' />
        </ExplaneContainer>
      </WriteContainer>
    </Container>
  );
}

export default Search;
