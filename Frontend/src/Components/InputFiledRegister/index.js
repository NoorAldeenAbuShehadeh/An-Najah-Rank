import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import useStyles from "./style";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { InputGroup } from "react-bootstrap";
const InputFiledRegister = ({
  label,
  Icon,
  placeHolder,
  type,
  onChange,
  name,
  id,
  msg,
  onKeyDown,
  disabled,
}) => {
  const classes = useStyles({ msg });
  const [showPassword, setShowPassword] = useState(false);
  const changePasswordState = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Form.Group
      className={`${classes.Group} `} //mb-4
    >
      <Form.Label className={classes.label} htmlFor={id}>
        {label}
      </Form.Label>
      <InputGroup.Text className={classes.InputGroup}>
        <Icon className={classes.icon} draggable={false} alt="icon" />
        <Form.Control
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeHolder}
          className={classes.InputFiled}
          onChange={onChange}
          name={name}
          id={id}
          onKeyDown={onKeyDown}
          disabled={disabled}
        />
        {type === "password" &&
          (showPassword ? (
            <AiOutlineEye
              className={classes.iconPassword}
              draggable={false}
              alt="icon"
              onClick={changePasswordState}
            />
          ) : (
            <AiOutlineEyeInvisible
              className={classes.iconPassword}
              draggable={false}
              alt="icon"
              onClick={changePasswordState}
            />
          ))}
      </InputGroup.Text>
      {msg && (
        <Form.Text className={classes.msg} muted>
          * {msg}
        </Form.Text>
      )}
    </Form.Group>
  );
};

export default InputFiledRegister;
