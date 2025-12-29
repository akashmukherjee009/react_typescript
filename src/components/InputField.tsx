import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleSubmit }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <form action="" className="input">
        <input
          ref={inputRef}
          type="input"
          className="input__box"
          placeholder="Enter a Task"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="input_submit" onClick={e=>{
          handleSubmit(e)
          inputRef.current?.blur()
        }} type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
