import React from "react";
import cx from "clsx";
import { useState } from "react";
import { Table, ScrollArea } from "@mantine/core";
import classes from "./table1.module.css";
export default function Table2({ gammaStats: stats }) {
  const [scrolled, setScrolled] = useState(false);

  const rows = stats.map((row, i) => (
    <Table.Tr key={i}>
      {i == 0 && <Table.Td>Gamma Mean</Table.Td>}
      {i == 1 && <Table.Td>Gamma Median</Table.Td>}
      {i == 2 && <Table.Td>Gamma Mode</Table.Td>}
      <Table.Td>{row.mean}</Table.Td>
      <Table.Td>{row.median}</Table.Td>
      <Table.Td>{row.mode}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table miw={700}>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr>
            <Table.Th>Measures</Table.Th>
            {stats.map((data) => (
              <Table.Th>{data.id}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
