import styled from 'styled-components'
import NavBar from './components/NavBar'
import Router from './Router/Router';

const Container = styled.div`
  display:flex;
  width: 100vw;
  min-height: 100vh;
  height:auto;
  background: linear-gradient(270deg, #CA3334 -23.8%, #EC9757 125.06%);
`

function Layout() {
  return (
    <Container>
      <Router />
      <NavBar />
    </Container>
  );
}

export default Layout;
