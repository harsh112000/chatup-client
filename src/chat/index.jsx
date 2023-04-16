import React from 'react';
import ChatBox from './components/chat-box';
import SideNavigation from './components/side-navigation';
import UserList from './components/users-list';
import { useLocation } from "react-router-dom";
import './index.scss'

const Chat = (props) => {

  const { state } = useLocation();
  let userName = 'N/A'
  if(state) {
    const {data:{ userName: name }} = state;
    userName = name
  }

  return (
    <div className="container">
      {userName}
      <div className="flex">
        <SideNavigation />
        <UserList />
        <ChatBox />
      </div>
    </div>

  )
}

export default Chat;