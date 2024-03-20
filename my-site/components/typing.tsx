import React, { useState, useEffect } from 'react';

const TypingComponent: React.FC = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [words, setWords] = useState(['Software Engineer...', 'Machine Learning Engineer...', 'Data Engineer...', 'Creative...', 'Team Player...', 'Critical Thinker...', 'What You\'re Looking For!!!']);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setText((prevText) => {
                if (prevText === words[index]) {
                    setIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
                    return '';
                } else {
                    return words[index].slice(0, prevText.length + 1);
                }
            });
        }, 200);

        return () => clearInterval(interval);
    }, [index, words]);

    return (
         <div className="absolute">
            <h2 className="text-gray-500 dark:text-gray-400">{text}</h2>
        </div>
    );
};

export default TypingComponent;