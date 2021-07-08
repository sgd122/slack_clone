import React, { FC, useCallback } from 'react';

import { Redirect } from 'react-router-dom';
import axios from 'axios';
import fetcher from '@utils/fetcher';
import useSWR from 'swr';

const Workspace: FC = ({ children }) => {
  const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher);

  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate(false, false);
      });
  }, []);

  if (!data) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;
