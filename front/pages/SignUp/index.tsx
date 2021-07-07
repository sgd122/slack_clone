import { Button, Error, Form, Header, Input, Label, LinkContainer, Success } from './styles';
import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email] = useState('');
  const [nickname] = useState('');
  const [password] = useState('');
  const [passwordCheck] = useState('');
  const [mismatchError] = useState(false);
  const [signUpError] = useState('');
  const [signUpSuccess] = useState(false);
  const onSubmit = useCallback(() => {
    console.log('submit');
  }, []);
  const onChangePassword = useCallback(() => {
    console.log('onChangePassword');
  }, []);
  const onChangePasswordCheck = useCallback(() => {
    console.log('onChangePasswordCheck');
  }, []);
  const onChangeEmail = useCallback(() => {}, []);
  const onChangeNickname = useCallback(() => {}, []);
  return (
    <div id="container">
      <Header>Slack Clone</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!nickname && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 회원이신가요?&nbsp;
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};
export default SignUp;
