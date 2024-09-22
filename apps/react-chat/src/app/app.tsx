import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';

const StyledApp = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  backdrop-filter: blur(19px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.125);
`;

export function App() {
  return <StyledApp className="__StyledApp">React Chat APP</StyledApp>;
}

export default App;
