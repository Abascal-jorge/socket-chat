import '../styles/globals.css';
import ChatState from "../context/chat/chatState";

const MyApp = ({ Component, pageProps }) => {
  return ( 
    <ChatState>
      <Component {...pageProps}/>
    </ChatState>   
  );
}
 
export default MyApp;