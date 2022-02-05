import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const AddItem = ({ data, addItem }) => {
    const [todo, setTodo] = React.useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!todo) {
            alert("Fill the data")
        }
        else {
            var value = data.map(function (item) { return item.todo });
            var isDuplicate = value.some((item) => {
                return item === todo
            })
            if (isDuplicate === true) {
                alert("Duplicate Found")
            }
            else {
                addItem(todo)
            }
        }
        setTodo("")
    }

    return (<>
        <h2>Add Todo</h2>
        <form onSubmit={submit}>
            <Grid container spacing={2}>
                <Grid item xs={9} sm={12} md={4}>
                    <TextField size="small" id="form" value={todo} onChange={(e) => { setTodo(e.target.value) }} label="Todo..." variant="outlined" style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={3} sm={12} md={4}>
                    <Button variant="contained" type="submit">ADD</Button>
                </Grid>
            </Grid>
        </form>
    </>)
}

export default AddItem