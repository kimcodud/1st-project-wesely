import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  //체크박스
  // const isChecked = checkbox.checked;

  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    checkPassword: '',
    userName: '',
    phoneNumberCenter: '',
    phoneNumberLast: '',
  });

  // const {
  //   email,
  //   password,
  //   checkPassword,
  //   userName,
  //   phoneNumberCenter,
  //   phoneNumberLast,
  // } = formValue;

  //구조분해할당 - input 값 저장
  const handleForm = e => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  console.log(formValue);

  //테스트: 이메일, 패스워드, 패스워드 확인
  // const isEmailValid = EmailRegExp.tes(formValue.email);
  // const isPasswordValid = PasswordRegExp.test(formValue.password);
  // const isPasswordChecked =
  //   formValue.password &&
  //   formValue.checkPassword &&
  //   formValue.password === formValue.checkPassword;

  const emailRegExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,12}$/;

  console.log('이메일 유효성 검사:', emailRegExp.test(formValue.email));
  console.log('패스워드 유효성 검사:', passwordRegExp.test(formValue.password));

  //유효성 검사
  const isValidate =
    // formValue.email.test(
    //   /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    // ) &&
    // formValue.password.test(
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,12}$/
    // ) &&
    formValue.password === formValue.passwordCheck &&
    formValue.userName.length >= 2 &&
    formValue.phoneNumberCenter.length == 4 &&
    formValue.phoneNumberLast.length == 4;

  console.log(
    '비밀번호확인 유효성 검사:',
    formValue.password === formValue.passwordCheck
  );

  console.log('이름 유효성 검사:', formValue.userName.length >= 2);
  console.log(
    '폰번호 유효성 검사:',
    formValue.phoneNumberCenter.length == 4 &&
      formValue.phoneNumberLast.length == 4
  );

  // &&formValue.phoneNumberCenter.length + formValue.phoneNumberCenter.length ==
  //   8;

  const onSignUp = e => {
    e.preventDefault();
    fetch('API주소', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: formValue.email,
        password: formValue.password,
        name: formValue.username,
        phone_number:
          '010-' +
          formValue.phoneNumberCenter +
          '-' +
          formValue.phoneNumberLast,
      }),
    })
      .then(response => response.json())

      .then(data => {
        if (data.MESSAGE === 'SUCCESS') {
          return (
            alert('회원가입 되었습니다!'),
            navigate('/login'),
            localStorage.setItem('token', data.accessToken)
          );
        } else if (data.MESSAGE === 'DUPLICATE EMAIL') {
          alert('중복된 회원정보입니다!');
        }
      });

    // .catch(error => {
    //   alert('회원정보를 다시 확인해 주세요.');
    // });
  };
  return (
    <div className="signUpWrap">
      <div className="signUpTop">
        <h2 className="signUpTitle">회원가입</h2>
        <h3 className="signUpSubtitle">기본정보</h3>
        <p className="signUpRequired">필수입력사항</p>
      </div>

      {/* ❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️❗️*/}
      <div className="userInfo">
        {USER_FORM.map(info => {
          return (
            <div className="form" key={info.id}>
              <div className="formTitle">{info.formTitle}</div>
              <input
                name={info.name}
                value={formValue.name}
                className="formInput"
                placeholder={info.placeholder}
                onChange={handleForm}
              />
            </div>
          );
        })}
      </div>

      <div className="PhoneNumberWrap">
        <div className="phoneNumberTitle">휴대전화</div>

        <div className="phoneNumberInfo">
          <select className="phoneNumberFirst">
            <option value="010">010</option>
            <option value="010">011</option>
            <option value="010">016</option>
            <option value="010">017</option>
            <option value="010">018</option>
            <option value="010">019</option>
          </select>
          -
          <input
            className="phoneNumberCenter"
            name="phoneNumberCenter"
            type="text"
            value={formValue.phoneNumberCenter}
            onChange={handleForm}
            placeholder="0000"
            maxLength="4"
          />
          -
          <input
            className="phoneNumberLast"
            name="phoneNumberLast"
            type="text"
            value={formValue.phoneNumberLast}
            onChange={handleForm}
            placeholder="0000"
            maxLength="4"
          />
        </div>
      </div>

      <div className="agreeWrap">
        <div className="agreeTitle">이용약관동의</div>
        <input className="checkbox" type="checkbox" />

        <label>동의합니다 </label>
      </div>

      <div className="submitWrap">
        <button
          className="submitButton"
          disabled={
            !emailRegExp.test(formValue.email) &&
            !passwordRegExp.test(formValue.password) &&
            !isValidate
          }
          onClick={onSignUp}
        >
          가입하기
        </button>
      </div>
    </div>
  );
};

export default SignUp;

const USER_FORM = [
  {
    id: 1,
    name: 'email',
    formTitle: '이메일',
    placeholder: '이메일을 입력해주세요',
  },
  {
    id: 2,
    name: 'password',
    formTitle: '비밀번호',
    placeholder: '숫자,소문자,대문자,특수문자가 최소 1개 포함/ 8~12 글자',
  },
  {
    id: 3,
    name: 'passwordCheck',
    formTitle: '비밀번호 확인',
    placeholder: '비밀번호를 한번 더 입력해주세요',
  },
  {
    id: 4,
    name: 'userName',
    formTitle: '이름',
    placeholder: '실명으로 기입해주세요',
  },
];
