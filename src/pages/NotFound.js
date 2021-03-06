/**
 * Created by chalosalvador on 8/28/20
 */
import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import { Routes } from '../constants/routes';

const NotFound = ( props ) => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><Link to={Routes.HOME}>Ir al incio</Link></Button>}
  />
);

export default NotFound;
