import styled from "styled-components";
import DatePicker from "react-datepicker";

export const InputFC = styled.input`
  border-radius: 5px;
  border: 0px;
  background-color: #40444b;
  color: white;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  margin: 8px 0;
`;

export const InputDateFC = styled(DatePicker)`
  border-radius: 5px;
  border: 0px;
  background-color: #40444b;
  color: white;
  width: 250px;
  padding: 15px;
`;
