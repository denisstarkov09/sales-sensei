import React, {useState, useEffect, useRef} from "react";
import MainLayout from "../layouts/main";
import axios from "axios";

const Main = () => {
  const [prompts , setPrompts] = useState([]);
  const [answers , setAnswers] = useState([]);
  const [message, setMessage] = useState("");
  const historyRef = useRef(null)

  useEffect(() => {
    historyRef.current.scrollTop = historyRef.current.scrollHeight
  }, [prompts, answers])

  const errorMessage ="disconnect server";
  const handleKeyPress = async(event) => {
    if(event.key === 'Enter'){
      await sendPrompt();
    }
  }

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }
  
  const sendPrompt = async() => {
    if(message !== ""){
      console.log(message);
      setPrompts([...prompts, message]);
      setMessage('');
      await axios.post('http://localhost:5000/api/chat', {"message":message})
        .then(response =>{
          setAnswers([...answers, {type: "answer", content: response.data}]);
        })
        .catch(error =>{
          setAnswers([...answers, {type: "answer", content: errorMessage}]);
          console.error(error);
        })
    }
  }
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  
  return (
    <MainLayout>
      <div className="w-[100%] h-[100%] flex justify-between flex-col">
        <div className="flex items-center justify-center w-[100%] h-[100px]">
          <img className="w-[48px]" src="/images.png" alt="" />
          <p className="text-[15px] font-bold ml-[20px] text-[#231656]">
            My Sensei
          </p>
        </div>
        <div className="flex items-center w-[100%] h-[78%] flex-col chat-history-box" ref={historyRef}>
          {
            prompts.map((message, index) => <div key={index} className='chat-history-wrapper'>
                <div  className='msg-prompt-wrapper'>
                  <div className='msg-prompt'>{message}</div>
                </div>
                { answers[index] && <div className={`msg-${answers[index].type}-wrapper`}>
                  <div className={`msg-${answers[index].type}`}>
                    {answers[index].content}
                  </div>
                </div>}
              </div>)
          }
        </div>
        <div className="w-[100%] px-[10%] h-[100px] flex items-center justify-center mb-[20px]">
          <div className="w-[100%] h-[80px] rounded-[8px] dropped2 border-[1px] border-[#D6D6D6] px-[40px] flex items-center ">
            <input type="text" placeholder="How can i help you?" className="w-[100%] outline-none h-[100%]" name="message" value={message} onKeyDown={handleKeyPress} onChange={handleChange}/>
            <div className="w-[80px] h-[100%] flex items-center justify-end" >
                <img src="/send.svg" alt="" onClick={sendPrompt}/>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Main;
