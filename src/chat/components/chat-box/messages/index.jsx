import React, {useState, useEffect, Fragment} from "react";
import axios from 'axios';
import './index.scss';


const Messages = (props) => {
  const {userName} = props


  const [messages, setMessage] = useState([])

  const getMessageList = async () => {
      const {data} = await axios.get("http://localhost:3001/messages");
      setMessage(data)
  }

  useEffect(()=> {
    getMessageList()
  }, [])


    return (
    <div className="messages-chat">

    {messages.map((i, idx)=> {

      const {message, sendBy} = i;
      return (
        <Fragment key={idx}>
          <div className="message">
            <div className="photo">
              <div className="online"></div>
            </div>
          </div>
          <p className="time"> 14h58</p>
          {userName !== sendBy ? <div className="message text-only">
            <div className="response">
              <p className="text"> {message}</p>
            </div>
          </div> :   <div className="message text-only">
              <p className="text"> {message}</p>
          </div>}
        </Fragment>
      )
    })}
    </div>
    );
}


export default Messages;
