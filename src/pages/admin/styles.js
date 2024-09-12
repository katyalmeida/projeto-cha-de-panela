import styled from "styled-components";
export const Container = styled.ul`
  .table-container {
    margin: 20px;
    overflow-x: auto;
  }
  .titulo {
    font-size: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid #dddddd;
    padding: 8px;
    text-align: left;
    font-size: 10px;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
    font-size: 10px;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;
