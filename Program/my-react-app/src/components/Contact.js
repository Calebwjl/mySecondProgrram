import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>联系我们</h1>
      <p>如果您有任何问题或建议,请随时与我们联系。</p>
      <ul>
        <li>电子邮件: info@example.com</li>
        <li>电话: 123-456-7890</li>
        <li>地址: 北京市朝阳区xxx街xxx号</li>
      </ul>
      <Link to="/">返回界面の首页</Link>
    </div>
  );
}

export default Contact;