import React from 'react';
export default class ComponentHeader extends React.Component{

  render(){
    const styleComponentHeader = {
      header: {
        backgroundColor: '#333',
        color: '#fff',
        paddingTop: '35px',
        paddingBottom: '15px'
      }
    };
    return (
      <header style={styleComponentHeader.header} className="smallFontSize">
        <h1>这里是头部9-1</h1>
      </header>
    )    
  }
}