'use client'

import { log } from "console";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  function asyncFunctionTest() {
    fetch('/api/random-number', {
      method: 'GET'
    }).then(a => a.json()).then(b => {
      console.log(b);
    })
  }

  const [test, setTest] = useState<String>("on");
  
  useEffect(() => {
    console.log('hello');
  }, [])

  return (
    <div>
      Hello World
      <button onClick={() => asyncFunctionTest()}>
        {test}
      </button>
    </div>
    
  )
}

