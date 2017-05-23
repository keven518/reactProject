import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';

import ReactMixin from 'react-mixin';
import MixinLog from './mixins';

const defaultProps = {
  username: '这是一个默认的用户名'
};

export default class BodyIndex extends React.Component{
  constructor(){
    super();
    this.state = {
      username : 'keven',
      age : 20
    }
  };
  changeUserInfo(age){
    this.setState({age: age});
    console.log(this.state.age);
    //第一种方式
    // var mySubmitBotton = document.getElementById('submitButton');
    // console.log('mySubmitBotton: ')
    // console.log(mySubmitBotton)
    // ReactDOM.findDOMNode(mySubmitBotton).style.color = 'red';

    //第二种方式
    console.log('this.refs.submitButton: ');
    console.log(this.refs.submitButton);
    this.refs.submitButton.style.color = 'green';

    MixinLog.log();

  };

  handleChildValueChange(e){
    this.setState({age : e.target.value});
  };

  render(){

    var userName = '柯文';
    var boolInput = false;
    var html = 'imooc&nbsp;LESSON';
    var html1 = 'imooc\u0020LESSON';

    return (
      <div>
        <h2>页面的主体内容</h2>
        <p>{userName=='' ? '用户还没有登录' : '用户名: ' + userName}</p>
        <p><input type='button' value={userName} disabled={boolInput} /></p>
        {/*这里是注释部分*/}
        <p>{html}</p>
        <p>{html1}</p>
        <p>接受到的父页面的属性： 用户id:{this.props.userid}</p>
        <p>接受到的父页面的属性：用户名:{this.props.username}</p>
        <p>年龄:{this.state.age}</p>
        <p dangerouslySetInnerHTML = {{__html : html}}></p>
        <BodyChild {...this.props} kvAge={28} kvChange={this.handleChildValueChange.bind(this)}/>
        <input id='submitButton' ref='submitButton' type="button" value="提交" onClick={this.changeUserInfo.bind(this, 18)}/>
      </div>
    )    
  }
}

BodyIndex.propTypes = {
  userid: React.PropTypes.number.isRequired
}

BodyIndex.defaultProps = defaultProps;

ReactMixin(BodyIndex.prototype, MixinLog);