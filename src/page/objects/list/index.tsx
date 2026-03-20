import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useListObject } from "./useListObject";
import { TableContainer, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export function ListObject() {
  const { objectList, hanedleEdit } = useListObject();

  const firstItem = objectList?.[0];
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600, margin: "0 auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            {firstItem &&
              ["id", "name",...Object.keys(firstItem.data ?? {}), "Edit"].map(
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

              <TableCell>
                <Button onClick={()=> hanedleEdit(item.id)}>
                  <EditIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
