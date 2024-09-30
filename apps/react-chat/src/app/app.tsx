import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';
import { ChatList } from '../components/ChatList';
import { ChatDetail } from '../components/ChatDetail';
import { ChatContent } from '../components/ChatContent';

const StyledApp = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  backdrop-filter: blur(19px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.125);
  display: flex;
`;

const StyledChatList = styled(ChatList)`
  flex: 1;
`;

const StyledChatDetail = styled(ChatDetail)`
  flex: 1;
`;

const StyledChatContent = styled(ChatContent)`
  flex: 2;
`;

export function App() {
  return (
    <StyledApp className="__StyledApp">
      <StyledChatList className="__StyledChatList" />
      <StyledChatContent className="StyledChatContent" />
      <StyledChatDetail className="__StyledChatDetail" />
    </StyledApp>
  );
}

export default App;
