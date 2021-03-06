import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
const mountNode = document.getElementById('app');


import { Modal, Button } from 'antd';
import Comment from '../components/button.js'

const App = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('点击了确定');
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Comment name="Ivan" ></Comment>
      </div>
    );
  },
});
// <Button type="primary" onClick={this.showModal}>显示对话框</Button>
// <Modal title="第一个 Modal" visible={this.state.visible}
//   onOk={this.handleOk} onCancel={this.handleCancel}
// >
//   <p>对话框的内容</p>
//   <p>对话框的内容</p>
//   <p>对话框的内容</p>
// </Modal>
ReactDOM.render(<App />, mountNode);

