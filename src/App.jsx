import { useRef, useReducer, useEffect} from 'react'
import './App.css'
import { init, initialState, todoReducer } from './reducers/todoReducer'
import Todo from './components/Todo'
import { Stack , Input, Button, Text } from '@chakra-ui/react'


function App() {
const [todos,dispatch] = useReducer(todoReducer,initialState,init)
const inputRef = useRef()

  const addTodo = (e) => {
    e.preventDefault()
    if(inputRef.current.value.length === 0) return    
    dispatch({type : "addTodo", payload : inputRef.current.value})
    inputRef.current.value = ""
  }
  
  const removeTodo = (todo) => {
    dispatch({type : "removeTodo", payload : todo})
  }

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
   },[todos])

  return (
    <>
        <Text fontSize="50px">Todo List</Text>
        <form onSubmit={(e) => addTodo(e)}>
            <Stack mt='4' mb='4' direction="row">
                <Input  h='46'
                        borderColor="blue.500"
                        variant='outline'
                        type='text' 
                        placeholder='Nueva tarea...'
                        boxShadow="none"
                        outline="none"
                        colorScheme='none'
                        ref={inputRef} 
                />
                <Button   colorScheme='twitter'
                          px='8'
                          pl='10'
                          pr='10'
                          h='46'
                          type='submit'
                >
                  Add
                </Button>
            </Stack>
        </form> 
      
        <div className='todos'>
          {todos && todos.map(todo => {
            return <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
          })}
        </div>
     
    </>
  
    
  )
}

export default App
