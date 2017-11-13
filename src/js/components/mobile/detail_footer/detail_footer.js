import React from "react";
import "./detail_footer.css";
import {Icon} from "antd";
//export default class MobileFooter extends React.Component
export default class DetailFooter extends React.Component {
  backfn(){
    window.history.back();
  }
  render(){
    return(
      <div className="detail_footer">
        <Icon type="left" onClick={this.backfn.bind(this)}/>
        <input className="commit" type="text" placeholder="评论抽现金" />
        <Icon type="star-o" /><Icon type="star" />
        <Icon type="like" />
        <Icon type="dislike" />
        <Icon type="export" />
        <Icon type="message" />
      </div>
    )
  }
}
