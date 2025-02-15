async function getTodos(){
    const res=await fetch('https://jsonplaceholder.typicode.com/todos'
        // not to store the result in the cache function 
    )
    if(!res.ok) throw new Error('failed to fetch the todos.')
    return res.json()
}
const Page= async() => {
    const todos=await getTodos()

    
  return (
    <section className="py-24">
        <div className="container">
            <h1 className="text-3xl font-bold">TODOS</h1>
            <ul className="mt-6 flex flex-col gap-3">
                {todos.slice(0,20).map((todo)=>(
                    
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            
        </div>
      
    </section>
  )
}

export default Page
