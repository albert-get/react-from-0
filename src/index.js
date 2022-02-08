import React from 'react'
import { render } from 'react-dom';
import loadable from '@loadable/component'
import App from './app'
import './index.less'

render(
    <App />,
    document.getElementById('root')
);