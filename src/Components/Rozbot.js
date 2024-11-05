import { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAI from '../Hooks/useAI';


const Rozbot = () => {
    const [conversation, setConversation] = useState([{role: 'system', content: "Hello, I'm Rozbot! I am a language model trained to answer questions you have about Rory."}]);
    const { aiResponse, pending, error } = useAI(conversation);
    const [response, setResponse] = useState('');

    const handleTextSubmit = (e) => {
        e.preventDefault();
        if (!!aiResponse){
            setConversation([...conversation, {role: 'assistant', content: aiResponse}, {role: 'user', content: response}]);
        } else {
            setConversation([...conversation, {role: 'user', content: response}]);
        }
    }

    return ( 
        <div className='rozbot m-4 '>
            <Container fluid className='p-0'>
                <h2 className='m-3'>Rozbot</h2>
                <div className='p-0 overflow-scroll' style={{'maxHeight': '100vh'}}>
                    <ul className='list-group'>
                        {
                            conversation.map((msg, i) => (
                                <li key={i} className={`list-group-item` + (i%2!==0 ? ` text-end` : ` bg-body-tertiary`)}>{msg.content}</li>
                            ))
                        }
                        {
                            conversation.length > 1 && !!!aiResponse &&
                            <li className='list-group-item bg-body-tertiary'>
                                <div className='spinner-border spinner-border-sm'/>
                            </li>
                        }
                        {!!aiResponse && <li className='list-group-item bg-body-tertiary'>{aiResponse}</li>}
                        {
                            (conversation.length <=1 || !!aiResponse) &&
                            <li className='list-group-item'>
                                <form onSubmit={(e) => {handleTextSubmit(e)}}>
                                    <input
                                        className='form-control text-end'
                                        placeholder='your response...'
                                        value={response}
                                        onChange={(e)=>{setResponse(e.target.value)}}
                                    />
                                    <input type='submit' hidden/>
                                </form>
                            </li>
                        }
                    </ul>
                </div>
            </Container>
        </div>
    );
}
 
export default Rozbot;