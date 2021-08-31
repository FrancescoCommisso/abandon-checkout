import React, { Component, useState } from "react";
import { Button, Input, Wrapper } from "./style";
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
        <table>
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
                  <td style={{ border: "1px solid", padding: "10px" }}>
                    {l.title}
                  </td>
                  <td style={{ border: "1px solid", padding: "10px" }}>
                    {l.sku}
                  </td>

                  <td style={{ border: "1px solid", padding: "10px" }}>
                    {l.quantity}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Wrapper>
  );
};

export default QuickMap;
