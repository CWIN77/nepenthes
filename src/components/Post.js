import styled from 'styled-components'
import Img_profile_CWIN from './svg/profile_CWIN.png';
import { ReactComponent as Svg_menu } from './svg/menu.svg';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display:flex;
  flex-direction: column;
  width: 260px;
  height:146.25px;
  margin-left: 12px;
  margin-right: 12px;
  margin-bottom: 48px;
  border-radius: 12px;
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`
const ErrMsg = styled.div`
  display: flex;
  padding: 13px;
  padding-top: 10px;
  height:100%;
  font-size: 13px;
  color:black;
  font-weight: 500;
  background-color: white;
  border-radius: 15px 15px 0px 0px;
`
const Bar = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  background-color: initial;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 0px 0px 15px 15px;
`
const Title = styled.div`
  font-size: 13px;
  margin-left: 6px;
  font-weight: 500;
  color:white;
`
const Profile = styled.img`
  width:16px;
  height: 16px;
`

function Post() {
  return (
    <Container>
      <ErrMsg>
        <Link style={{textDecoration:'none',color:'black'}} to="/detail/11">
          error - uncaughtexception: typeerror: cannot read properties of undefined (reading 'updatehash')
        </Link>
      </ErrMsg>
      <Bar>
        <div style={{display:'flex'}}>
          <Profile src={Img_profile_CWIN} />
          <Link style={{textDecoration:'none',color:'black'}} to="/detail/11">
            <Title>React build error</Title>
          </Link>
        </div>
        <Svg_menu style={{padding:'8px'}} />
      </Bar>
    </Container>
  );
}

export default Post;
