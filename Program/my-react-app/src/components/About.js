import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>关于我们</h1>
      <p>我们是一家致力于提供高质量Web开发服务的公司。</p>
      <p>我们的团队由经验丰富的开发人员组成,专注于创建响应式和用户友好的网站。</p>
      <Link to="/">返回我们首页</Link>
    </div>
  );
}

export default About;