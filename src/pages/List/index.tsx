import { Box, Flex, Header } from "@/components"
import { useLocation } from "react-router"

export const List = () => { 
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const id = queryParams.get('id') || ''
  
  return (
    <>
      <Header />
      <Flex width="1350px" margin="auto" justifyContent="space-between">
        <Box width="930px">
          {id}
        </Box>
        <Box width="260px">

        </Box>
      </Flex>
    </>
  )
}