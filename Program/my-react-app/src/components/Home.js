import React from "react";
import { Link } from "react-router-dom";

const Element1 = () => <h2> 组件1 - 常量 </h2>;

function Home() {
  return (
    <div>
      <h1> 欢迎来到我们的网站 </h1>{" "}
      <p> 这是一个使用React和React Router构建的多页面应用示例。 </p>{" "}
      <nav className="nav-links">
        <Link to="/about"> 关于我们 </Link>{" "}
        <Link to="/contact"> 联系我们 </Link>{" "}
      </nav>{" "}
      <Element1 />
    </div>
  );
}

export default Home;
