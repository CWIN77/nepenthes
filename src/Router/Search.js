import { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Container,Title} from './PublicRouterStyle'
import { ReactComponent as Svg_search } from '../components/svg/search.svg';
import { getSearchData } from '../firebase/firestore'
import Post from '../components/Post';

const SeachContainer = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SearchInput = styled.textarea`
  display:flex;
  width:50vw;
  max-width: 320px;
  height:20px;
  padding:18px;
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
  box-shadow: 0px 4px 24px 2px rgba(0, 0, 0, 0.2);
  margin-bottom: 12px;
  margin-top: 12px;
`
const SearchBtn = styled.button`
  display:flex;
  align-items: center;
  justify-content: center;
  width:135px;
  border-radius: 8px;
  color:black;
  background-color: white;
  font-size: 11px;
  padding-top: 9px;
  padding-bottom: 9px;
  margin-top: 18px;
  border:none;
  outline:none;
  cursor: pointer;
`
const ResultContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: center;
  width:90%;
  max-width: 600px;
`
const ResultText = styled.div`
  width:250px;
  display: flex;
  justify-content: center;
  color:white;
  border-bottom : 3px solid white;
  margin-bottom: 30px;
  padding: 6px;
  font-size: 16px;
  margin-top: 40px;
`

function Search() {
  const [searchResult,setSearchResult] = useState(null);
  const useInput = (initialValue) => {
    const [value,setValue] = useState(initialValue);
    const onChange = (e) => {
      e.target.style.height = '20px'
      e.target.style.height = e.target.scrollHeight - 28 + 'px'
      setValue(e.target.value);
      sessionStorage.setItem("searchKeyword", e.target.value)
    }
    return {value,onChange}
  }
  const searchValue = useInput(sessionStorage.getItem("searchKeyword") || '');

  const svg_current = {width:13,height:13,fill:"black",style:{marginLeft:6}}

  return (
    <Container>
      <Title>Search</Title>
      <SeachContainer>
        <SearchInput {...searchValue} placeholder='검색어를 입력해주세요.' />
        <SearchBtn onClick={()=>{getSearchData(searchValue.value,"errMsg").then((result)=>{setSearchResult(result)})}}>에러메세지로 검색<Svg_search {...svg_current} /></SearchBtn>
        <SearchBtn onClick={()=>{getSearchData(searchValue.value,"title").then((result)=>{setSearchResult(result)})}}>제목으로 검색<Svg_search {...svg_current} /></SearchBtn>
        {
          searchResult && searchResult.length
          ? <ResultText>Result</ResultText>
          : <></>
        }
        <ResultContainer>
          {
            searchResult &&
            searchResult.map((data,key)=>{
              return <Post key={key} data={data} />
            })
          }
        </ResultContainer>
      </SeachContainer>
    </Container>
  );
}

export default Search;
