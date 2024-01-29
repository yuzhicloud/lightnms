import './home.scss';

import React, { useEffect, useState } from 'react';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { getLoginUrl, REDIRECT_URL } from 'app/shared/util/url-utils';
import { useAppSelector } from 'app/config/store';
import axios from 'axios';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  const [nceUserName, setNceUserName] = useState('');
  const [nceUserPwd, setNceUserPwd] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  interface NceCredentials {
    nceUserName: string;
    nceUserPwd: string;
  }

  useEffect(() => {
    const redirectURL = localStorage.getItem(REDIRECT_URL);
    if (redirectURL) {
      localStorage.removeItem(REDIRECT_URL);
      location.href = `${location.origin}${redirectURL}`;
    }
  });

  const handleInputChange1 = e => {
    setNceUserName(e.target.value);
  };

  const handleInputChange2 = e => {
    setNceUserPwd(e.target.value);
  };

  async function connectToNce(nceUserName: string, nceUserPwd: string): Promise<any> {
    const credentials: NceCredentials = {
      nceUserName,
      nceUserPwd,
    };
    try {
      const response = await axios.post('/api/ncelogin', credentials);
      console.log('connectToNce::', response);
      return response.data;
    } catch (error) {
      // 处理错误
      console.error('Error connecting to NCE:', error);
      throw error;
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await connectToNce(nceUserName, nceUserPwd);
      console.log('完整响应:', response);
      if (response === 'success') {
        // 请求成功且返回了 'success'
        console.log('登录成功');
        setIsSubmitted(true);
      } else {
        setLoginFailed(true);
        console.error('登录失败:', response.data);
      }
    } catch (error) {
      console.error('提交错误:', error);
      // 处理错误
    }
  };

  return (
    <Row>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
      <Col md="9">
        {account?.login ? (
          <div>
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>

            <h5>Please Connect to NCE </h5>
            {!isSubmitted ? (
              <div>
                {loginFailed && (
                  <Alert color="danger">
                    <Translate contentKey="home.nceLoginFailed">登录失败</Translate>
                  </Alert>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="inputField1">
                      <Translate contentKey="home.nceUserName">NCE User Name</Translate>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputField1"
                      placeholder="username"
                      value={nceUserName}
                      onChange={handleInputChange1}
                    />
                  </div>
                  <p></p>
                  <div className="form-group">
                    <label htmlFor="inputField2">
                      <Translate contentKey="home.nceUserPwd">NCE User Password</Translate>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputField2"
                      placeholder="password"
                      value={nceUserPwd}
                      onChange={handleInputChange2}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              // 如果已提交，显示成功消息
              <Alert color="success">
                <Translate contentKey="home.nceLoginSuccess">处理成功</Translate>
              </Alert>
            )}
          </div>
        ) : (
          <div>
            <h1 className="display-4">
              <Translate contentKey="home.title">NMS</Translate>
            </h1>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Home;
