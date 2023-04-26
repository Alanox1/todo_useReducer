import { Button, Stack, Text } from "@chakra-ui/react";
function Todo({todo,removeTodo}) {
    return ( 
        <Stack  key={todo.id} id={todo.id} borderColor='gray.100'
                borderWidth='2px'
                p='3'
                borderRadius='lg'
                w='100%'
                maxW={{ base: "100vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
                alignItems='stretch'
                direction="row"
                margin="10px 0px">
        <Text w='100%'
              p='8px'
              borderRadius='lg'
              cursor='pointer'
        >
                {todo.title}
        </Text>
        <Button  backgroundColor="rgb(7, 7, 51)" 
                    _hover="none" 
                    onClick={() => removeTodo(todo)}
            > 
            <svg onClick={() => removeTodo(todo)} width="40px" height="40px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#bb1818"><path d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="#bb1818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg> 
        </Button> 
    </Stack>
     );
}

export default Todo;