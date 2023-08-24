import { Box, Header } from "@/components"
import { Flex } from "@/components/Flex"
import { MENU } from '@/constants'

import './index.css'

export const Menu = () => { 
  return (
    <>
      <Header />
      <Flex width="80vw" margin="auto" justifyContent="space-between">
        <Box width="1200px">
          <Flex>
            {
              MENU.map((menu) =>(
                <div className="menu_card">
                  {
                    menu?.items.map((item) => (
                      <Flex justifyContent="space-between" height="100%">
                        <Flex justifyContent="center" alignItems="center" width="30%" height="100%">
                          <img src={item.icon} alt="" />
                        </Flex>
                        <div className="menu_card_right">
                          <div className="title">
                            {item.name}
                          </div>
                          <div className="description">
                            {item.description}
                          </div>
                        </div>
                      </Flex>
                    ))
                  }
                </div>
              ))
            }
          </Flex>
        </Box>
      </Flex>
    </>
  )
}