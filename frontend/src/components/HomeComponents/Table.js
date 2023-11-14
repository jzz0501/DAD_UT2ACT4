import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";

export default function Tabla(props) {

    const { list } = props

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Operacion</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Marca</TableCell>
                        <TableCell>Tipo</TableCell>
                        <TableCell>Precio</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        list.map((row) => {
                            return (
                                <TableRow>
                                    <TableCell><Button onClick={() => {
                                        fetch(`http://localhost:3030/delete?id=${row.id}`)
                                        props.updateEvent()
                                    }} variant="contained">Eliminar</Button></TableCell>
                                    <TableCell component="h1">{row.nombre}</TableCell>
                                    <TableCell>{row.marca}</TableCell>
                                    <TableCell>{row.tipo}</TableCell>
                                    <TableCell>{row.precio}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}