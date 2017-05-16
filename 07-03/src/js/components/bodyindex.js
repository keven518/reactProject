import React from 'react';
export default class BodyIndex extends React.Component{
  render(){
    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{userName=='' ? '用户还没有登录'}</p>
      </div>
    )    
  }
}