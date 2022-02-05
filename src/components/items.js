import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';


const ItemList = (({ data, deleteItem, editItem }) => {
    const [search, setSerach] = useState("")
    const filter = data.filter((filterData) => {
        if (search == "") { return filterData }
        else if (filterData.todo.toLowerCase().includes(search.toLowerCase())) {
            return filterData
        }
    })

    return (<>
        <h2>Todo List</h2>
        <Grid container>
            <Grid item xs={12} sm={12} md={4}>
                <TextField size="small" onChange={(e) => { setSerach(e.target.value) }} label="Search..." variant="outlined" style={{ width: "100%" }} />
            </Grid>
        </Grid>
        <br /><br />
        {filter.length === 0 ? "No data..." :
            filter.map((item, i) => {
                return (
                    <>
                        <Paper elevation={3} style={{ width: "50%", marginBottom: "10px" }} key={i}>
                            <Grid container>
                                <Grid item xs={8} sm={8} md={10} style={{ padding: "10px 0px 0px 5px" }}>
                                    {item.todo}
                                </Grid>
                                <Grid item xs={4} sm={4} md={2}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon onClick={() => { deleteItem(item) }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Paper>
                    </>
                )
            })
        }

    </>)
})

export default ItemList