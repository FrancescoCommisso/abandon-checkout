import React, { Component, useState } from "react";
import { Button, Input, Table, Wrapper } from "./style";
const QuickMap = () => {
  const [ac, set_ac] = useState(null);

  return (
    <Wrapper>
      {console.log(ac)}
      <Input
        placeholder="Paste Abandon Cart Code Here"
        onChange={(e) => {
          set_ac(null);
          const raw = e.target.value;
          const json = JSON.parse(raw);

          set_ac(json);
        }}
      ></Input>{" "}
      {ac && ac.checkout && ac.checkout.line_items && (
        <Table>
          <thead>
            <tr>
              <th>Description</th>
              <th>UPC</th>

              <th>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {ac.checkout.line_items.map((l) => {
              return (
                <tr>
                  <td>{l.title}</td>
                  <td>{l.sku}</td>

                  <td>{l.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Wrapper>
  );
};

export default QuickMap;
