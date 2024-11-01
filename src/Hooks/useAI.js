import { OpenAI } from "openai";

import { useEffect, useState } from "react";

const useAI = (conversation) => {
    const [aiResponse, setAiResponse] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setAiResponse(null);
        setTimeout(() => {
            if (conversation.length>1){
                setAiResponse(conversation.length);
            }
        }, 1000);
    }, [conversation])


    return { aiResponse, pending, error };
}
 
export default useAI;