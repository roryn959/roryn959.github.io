import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { useEffect, useState } from "react";

const useAI = (conversation) => {
    const [aiResponse, setAiResponse] = useState(null);
    const [error, setError] = useState(null);

    const prompt = ChatPromptTemplate.fromMessages([
        [
            'system', 
            `Instructions: You are an assistant which answers questions about Rory, using only the provided context.
                If you do not not have enough information to answer the question, reply explaining that you aren't sure.
                Do not use more than 20 words in your answers.
            
            Context: Rory grew up in Saffron Walden, a town Essex. Rory began coding when he was 13. Rory is currently 22. Rory received his Bachelor's
                degree in Computer Science from University College London in 2023. Rory enjoys reading, running, gaming, and listening to music.
                Rory speaks Spanish. Rory is a cat-lover. In addition to Computer Science, Rory is also interested in Physics, Philosophy, and
                History. 
            `
        ],
        new MessagesPlaceholder('messages')
    ]);

    const llm = new ChatOpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        model: 'gpt-4o-mini',
        temperature: 0.4
    });

    const chain = prompt.pipe(llm);

    useEffect(() => {
        
        const fetchResponse = async () => {
            const response = await chain.invoke({messages: conversation});
            setAiResponse(response.content);
        }
        setAiResponse(null);
        if (conversation.length>1){
            fetchResponse();
        }
    }, [conversation]);


    return { aiResponse, error };
}
 
export default useAI;