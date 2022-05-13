import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      {props.footerText}
      <a href="https://github.com/rajat4984">
        <i className="bi bi-github"></i>
      </a>
    </div>
  );
}

export default Footer;
