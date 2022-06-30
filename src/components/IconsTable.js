import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdBookmarkBorder } from "react-icons/md";
import { WiDaySprinkle } from "react-icons/wi";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";

export default function IconsTable() {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th>Icon Pack</Th>
            <Th>Icon</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Ant Design</Td>
            <Td>
              <AiFillLayout style={{ fontSize: 50, color: "#da291c" }} />
            </Td>
          </Tr>
          <Tr>
            <Td>Material UI</Td>
            <Td>
              <MdBookmarkBorder style={{ fontSize: 50, color: "#da291c" }} />
            </Td>
          </Tr>
          <Tr>
            <Td>Weather Icons</Td>
            <Td>
              <WiDaySprinkle style={{ fontSize: 50, color: "#da291c" }} />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
