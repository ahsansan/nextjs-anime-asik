import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      className="pt-1 pb-1 mt-4"
      style={{ backgroundColor: "#363636", color: "#fff" }}
    >
      <center>Copyright 2022 © Online Cinema</center>
    </Container>
  );
};

export default Footer;
