import socketIO from "socket.io-client";


const connectSocket = () => {
  const socket = socketIO('http://192.168.131.198:5000');
  return socket;
}

export default connectSocket;
