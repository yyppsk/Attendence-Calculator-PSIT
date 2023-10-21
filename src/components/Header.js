export default function Header() {
  return (
    <header className="header">
      <div className="main heading">What's my attendence? 🧮</div>
      <div className="sub heading">
        Be safe. Be calculative.{" "}
        <sub style={{ fontSize: "small" }}>
          <em>by Pranjal</em>
        </sub>
      </div>
      <span className="documentation-container">
        <a href="https://github.com/yyppsk/Attendence-Calculator-PSIT">
          <span className="documentation">Documentation</span>
        </a>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <a href="https://github.com/yyppsk/Attendence-Calculator-PSIT/issues">
          <span className="gitissue">
            <i className="fa-solid fa-code-branch fa-fade fa-sm"></i> issues
          </span>
        </a>
      </span>
    </header>
  );
}
