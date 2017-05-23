* state
* props

8.3
* 事件与数据的双向绑定

8.4
* 可复用组件
属性验证
BodyIndex.propTypes = {
  userid: React.PropTypes.number.isRequired
}

BodyIndex.defaultProps = defaultProps;  默认属性

传递所有参数的快捷方式  <BodyChild {...this.props} />

8.5
refs 主要是获取原生html节点来使用的

this.refs.submitButton.style.color = 'green';  
等价于
var mySubmitBotton = document.getElementById('submitButton');
ReactDOM.findDOMNode(mySubmitBotton).style.color = 'red';

8.6 独立组件间共享Mixins
