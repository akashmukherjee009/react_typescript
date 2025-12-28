import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleSubmit }: Props) => {
  return (
    <div>
      <form action="" className="input">
        <input
          type="input"
          className="input__box"
          placeholder="Enter a Task"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="input_submit" onSubmit={handleSubmit}>
          Go
        </button>
      </form>
    </div>
  );
};

export default InputField;
