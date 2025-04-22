function Footer() {
  return (
    <footer className="page-footer black">
      <div className="footer-copyright">
        <div className="container orange-text text-accent-2">
          © {new Date().getFullYear()}. TRACY
          <a className="orange-text text-accent-2 right" href="https://github.com/tracylick61">Developer</a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
