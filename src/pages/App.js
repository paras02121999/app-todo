import React from 'react';
import AddItem from "../components/addItem";
import Header from "../components/header";
import Layout from "../components/layout";
import Item from "../components/items";

const App = () => {
  const addItem = (todo) => {
    const myTodo = {
      todo: todo
    }
    setData([...data, myTodo])
  }

  const deleteItem = (todo) => {
    const check = window.confirm("Are you sure?")
    if (check) {
      setData(data.filter((e) => {
        return e !== todo;
      }))
    }
  }

   const editItem = (todo) => {
     const editTodo = data.find((e) => {
       return e.todo === todo
     })
   }

  let init;
  if (localStorage.getItem("data") === null) {
    init = [];
  }
  else {
    init = JSON.parse(localStorage.getItem("data"))
  }
  const [data, setData] = React.useState(init)

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  return (
    <>
      <Layout>
        <Header />
        <AddItem addItem={addItem} data={data}/>
        <Item data={data} deleteItem={deleteItem} editItem={editItem} />
      </Layout>
    </>
  );
}

export default App;
