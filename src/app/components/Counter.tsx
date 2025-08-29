"use client";

import React, { useState, useEffect, useMemo, useRef, useReducer } from 'react';
import { Button } from "@/components/ui/button";

type State = { count: number };
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [state, dispatch] = useReducer(reducer, initialState);

    const result = useMemo(() => {
        return count * 2;
    }, [count]);

    useEffect(() => {
        console.log('got it')
    }, [count]);
        
    const handleFocus = () => {
        inputRef.current?.focus();
    }

    const getUseRefValue = () => {
        alert(inputRef.current?.value);
    }

    return (
        <div>
            <p>Count: {state.count}</p>
            <div className="flex gap-2">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Type here..."
                    className="border p-2"
                />
                <Button
                    onClick={handleFocus}
                    className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
                >
                    Focus Input
                </Button>
                <Button variant="secondary" onClick={() => dispatch({ type: "increment"}) }>increment</Button>
                <Button variant="destructive" onClick={() => setCount(count - 1)}>decrement</Button>
                <Button variant="primary" onClick={getUseRefValue}>get UseRef value</Button>
            </div>
        </div>
      
    );
};

export default Counter;