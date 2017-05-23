import React from 'react';
export default class BodyIndex extends React.Component{
  render(){

    var userName = '柯文';
    var boolInput = false;
    var html = 'imooc&nbsp;LESSON';
    var html1 = 'imooc\u0020LESSON';

    //comments

    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{userName=='' ? '用户还没有登录' : '用户名: ' + userName}</p>
        <p><input type='button' value={userName} disabled={boolInput} /></p>
        {/*这里是注释部分*/}
        <p>{html}</p>
        <p>{html1}</p>
        <p dangerouslySetInnerHTML = {{__html : html}}></p>
      </div>
    )    
  }
}