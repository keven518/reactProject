var React = require('react');
var ReactDom = require('react-dom');
import ComponentHeader from './components/header';
import ComponentFooter from './components/footer';
import BodyIndex from './components/bodyindex';

import 'antd/dist/antd.css';

class Index extends React.Component{
  render(){
    var header = <ComponentHeader />;
    return (
      <div>
        {header}
        <BodyIndex userid={123} username={'柯文'} />
        <ComponentFooter />
      </div>
    );
  }
}

ReactDom.render(<Index/>,document.getElementById('example'));