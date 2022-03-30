import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #DFE5F9e1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Overlay = ({ children, onClick }) => {
  return (
    <Container
      as={motion.div}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
    >
      {children}
    </Container>
  );
};

export default Overlay;
