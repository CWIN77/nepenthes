import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { ReactComponent as Svg_arrow_down } from './svg/arrow_down.svg';
import { ReactComponent as Svg_arrow_up } from './svg/arrow_up.svg';

const Container = styled.div`
  display:flex;
`
const PageBox = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:24px;
  height:24px;
  color:white;
  border:2px solid white;
  font-size: 13px;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
`

function Page() {
  const [numberOfPage,setNumberOfPages] = useState([1,2,3,4,5]);
  const [nowPage,setNowPage] = useState(1)

  useEffect(()=>{
    
  },[])
  
  return (
    <Container>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        <PageBox><Svg_arrow_up width={16} height={16}></Svg_arrow_up></PageBox>
        <PageBox style={{backgroundColor:'white',color:'black'}}>1</PageBox>
        <PageBox><Svg_arrow_down width={16} height={16}></Svg_arrow_down></PageBox>
      </div>
    </Container>
  );
}

export default Page;
