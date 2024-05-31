function FooterNavigator(props) {
  return (
    <div className="footer-nav">
      <h1>{props.title}</h1>
      {props.links.map((link) => (
        <a key={link.title} href={link.link}>
          {link.title}
        </a>
      ))}
    </div>
  );
}

export default FooterNavigator;
