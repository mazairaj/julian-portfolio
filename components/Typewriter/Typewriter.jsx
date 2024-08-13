"use client";
import { animate, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = ({ words, typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 2000, delayBeforeDelete = 1000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setTypingDelay(delayBetweenWords);
      } else {
        setTypingDelay(isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, typingDelay, words, wordIndex, typingSpeed, deletingSpeed, delayBeforeDelete, delayBetweenWords]);

  return (

    <span className="inline-flex items-center">
        {text}
        <span className="cursor"></span>
    </span>
  );
};

export default Typewriter;
