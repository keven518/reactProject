import React from 'react';
export default class ComponentHeader extends React.Component{
  constructor(){
    super();
    this.state = {
      miniHeader: false
    }
  };

  switchHeader(){
    this.setState({
      miniHeader: !this.state.miniHeader
    })

  };

  render(){
    const styleComponentHeader = {
      header: {
        backgroundColor: '#333',
        color: '#fff',
        paddingTop: (this.state.miniHeader) ? '3px' : '35px',
        paddingBottom: (this.state.miniHeader) ? '3px' : '15px'
      }
    };
    return (
      <header style={styleComponentHeader.header} class="smallFontSize" onClick={this.switchHeader.bind(this)}>
        <h1>这里是头部9-6</h1>
      </header>
    )    
  }
}