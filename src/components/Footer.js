export default function Footer() {
  return (
    <header className="footer">
      <span>
        Made with <span style={{ color: "red" }}>❤</span> by{" "}
        <a href="/">Pranjal Pratap Singh</a>
      </span>
      <span>For Students of PSIT KANPUR</span>
      <span>
        <i
          className="fa-brands fa-github fa-fade fa-xl"
          style={{ color: "#8b93a2" }}
        ></i>
        {"  "}
        &nbsp; Github
      </span>
      <span>
        <i
          className="fa-brands fa-linkedin-in fa-fade fa-xl"
          style={{ color: "#8b93a2" }}
        ></i>
        &nbsp; Linkedin
      </span>
    </header>
  );
}
