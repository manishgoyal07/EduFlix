import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { MessageList, TypingIndicator } from '@chatscope/chat-ui-kit-react';


// const ChatBubble = ({message, sender})=>{
//   return(
//     <div>
//       <div className='chat-bubble'>{message}</div>
//       <div className='chat-bubble'>{sender}</div>
//     </div>
//   )
// }

const Chatbot = () => {

  const { fullName, avatar } = useSelector(state => state?.user?.loggedInUser)
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, I'm ChatGPT! Ask me anything!",
//       sentTime: "just now",
//       sender: "ChatGPT"
//     }
//   ]);
//   const [isTyping, setIsTyping] = useState(false);

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender: "user"
//     };

//     const newMessages = [...messages, newMessage];

//     setMessages(newMessages);

//     // Initial system message to determine ChatGPT functionality
//     // How it responds, how it talks, etc.
//     setIsTyping(true);
//     await processMessageToChatGPT(newMessages);
//   };

//   async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
//     // Format messages for chatGPT API
//     // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
//     // So we need to reformat

//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.message }
//     });


//     // Get the request body set up with the model we plan to use
//     // and the messages which we formatted above. We add a system message in the front to'
//     // determine how we want chatGPT to act. 
//     const apiRequestBody = {
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         systemMessage,  // The system message DEFINES the logic of our chatGPT
//         ...apiMessages // The messages from our chat with ChatGPT
//       ]
//     }

//     await fetch("https://api.openai.com/v1/chat/completions",
//       {
//         method: "POST",
//         headers: {
//           "Authorization": "Bearer " + API_KEY,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(apiRequestBody)
//       }).then((data) => {
//         return data.json();
//       }).then((data) => {
//         console.log(data);
//         setMessages([...chatMessages, {
//           message: data.choices[0].message.content,
//           sender: "ChatGPT"
//         }]);
//         setIsTyping(false);
//       });
//   }


  return (
    <div className="drawer w-16 drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      {/* <div className="drawer-content"> */}
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="btn btn-outline btn-accent mr-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
      </label>
      {/* </div>/ */}
      <div className="drawer-side border">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu p-4 w-2/6 z-50 mt-20 max-h-full bg-base-200 text-base-content flex flex-col justify-between">
          <div className='font-bold text-xl text-center border rounded-lg my-4'>Edubot - Powered by ChatGPT</div>

          {/* <MessageList> */}
            {/* {messages.map((message, i) => {
              console.log(message)
              return (<ChatBubble/>)
            })} */}
          {/* </MessageList> */}



          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="https://pics.craiyon.com/2023-06-08/8f12f7763653463289268bdca7185690.webp" />
              </div>
            </div>
            <div className="chat-header">
              Edubot
            </div>
            <div className="chat-bubble">Hey! How can I help you?</div>

          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src={avatar} />
              </div>
            </div>
            <div className="chat-header">
              {fullName}
            </div>
            <div className="chat-bubble">I hate you!</div>
          </div>


          <label className="input input-bordered flex items-center my-2 gap-2">
            <input type="text" className="grow" placeholder="Type here" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </label>

        </div>
      </div>
    </div>)
}

export default Chatbot