import React, { useEffect, useReducer } from "react";
import { validate } from "../../../../Util/validators";
import "./Input.css";

const reducer = (st, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...st,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCHED":
      return {
        ...st,
        isTouched: true,
      };
    default:
      return st;
  }
};

function Input(props) {
  const [inputState, dispatch] = useReducer(reducer, {
    value: props.initialValue || "",
    isValid: props.initialisValid || false,
    isTouched: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE",
      val: e.target.value,
      validators: props.validators,
    });
  };
  const handleTouch = () => {
    dispatch({ type: "TOUCHED" });
  };
  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={inputState.value}
        onChange={changeHandler}
        onBlur={handleTouch}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onBlur={handleTouch}
        onChange={changeHandler}
        value={inputState.value}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
}

export default Input;
