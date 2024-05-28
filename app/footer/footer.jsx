import variables from "./variables.module.scss";

export default function Footer() {
  return (
    <footer className={variables.footer}>
      <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}
