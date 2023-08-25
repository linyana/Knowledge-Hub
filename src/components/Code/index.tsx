import hljs from "highlight.js";
import "highlight.js/styles/dark.css";
import { useEffect, useRef } from "react";

type IPropsType = {
  language: 'javascript'
  code: string
}

export const Code = ({ 
  language,
  code,
}: IPropsType) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [code]);

  return (
    <pre>
      <code ref={codeRef} className={language}>
        {code}
      </code>
    </pre>
  );
};
