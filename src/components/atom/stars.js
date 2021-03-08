import styled from "styled-components";

export default styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  border: 2px solid #168ff7;
  margin: 0px 6px;
  background-color: ${(props) => (props.filled ? "#168ff7" : "transparent")};
`;
