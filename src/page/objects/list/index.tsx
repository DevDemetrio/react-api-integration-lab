import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useListObject } from "./useListObject";
import { TableContainer, Paper } from "@mui/material";

export function ListObject() {
  const { objectList } = useListObject();

  const firstItem = objectList?.[0];
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600, margin: "0 auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            {firstItem &&
              ["id", "name", ...Object.keys(firstItem.data ?? {})].map(
                (key) => <TableCell key={key}>{key}</TableCell>
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {objectList?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {String(item.data?.color ? item.data?.color : "-")}
              </TableCell>
              <TableCell>
                {String(item.data?.capacity ? item.data?.capacity : "-")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
