import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import '../styles/styletable.css';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'Nombre',
        headerName: 'Nombre',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
    { field: 'Direccion', headerName: 'Direccion', width: 130 },
    {
        field: 'Categoría',
        headerName: 'Categoría',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160
    },
    {
        field: 'Puntuación',
        headerName: 'Puntuación',
        type: 'number',
        width: '120',
    },
    {
        field: 'Ubicación',
        headerName: 'Ubicación',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
    {
        field: 'Clientes',
        headerName: 'Clientes',
        type: 'number',
        width: 120,
    },
    {
        field: 'Proveedores',
        headerName: 'Proveedores',
        type: 'number',
        width: 120,
    },
];

const rows = [
    { id: 1, Nombre: 'Snow', Direccion: 'x', Categoría: 'x', Puntuación: 35, Ubicación: 'x', Clientes: 1 , Proveedores: 1},
    { id: 2, Nombre: 'Lannister', Direccion: 'x', Categoría: 'x', Puntuación: 42, Ubicación: 'x'  , Clientes: 1, Proveedores: 1},
    { id: 3, Nombre: 'Lannister', Direccion: 'x', Categoría: 'x', Puntuación: 45 , Ubicación: 'x' , Clientes: 1 , Proveedores: 1},
    { id: 4, Nombre: 'Stark', Direccion: 'x', Categoría: 'x', Puntuación: 16 , Ubicación: 'x' , Clientes: 1  , Proveedores: 1},
    { id: 5, Nombre: 'Targaryen', Direccion: 'x', Categoría: 'x', Puntuación: 2 , Ubicación: 'x' , Clientes: 1 , Proveedores: 1},
    { id: 6, Nombre: 'Melisandre', Direccion: 'x', Categoría: 'x', Puntuación: 150 , Ubicación: 'x' , Clientes: 1 , Proveedores: 1},
    { id: 7, Nombre: 'Clifford', Direccion: 'x', Categoría: 'x', Puntuación: 44 , Ubicación: 'x' , Clientes: 1 , Proveedores: 1},
    { id: 8, Nombre: 'Frances', Direccion: 'x', Categoría: 'x', Puntuación: 36 , Ubicación: 'x' , Clientes: 1 , Proveedores: 1},
    { id: 9, Nombre: 'Roxie', Direccion: 'x', Categoría: 'x', Puntuación: 65 , Ubicación: 'x' , Clientes: 1 , Proveedores: 1 },
];

export default function DataTable() {
    return (
        <Box className='table'>
            <div style={{ height: '100%' , width: '100%' }} className= 'datos'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </Box>
    );
}
