import { Box, Header } from "@/components"
import { Flex } from "@/components/Flex"
import { MENU } from '@/constants'

import './index.css'

export const Menu = () => { 
  return (
    <>
      <Header />
      <Flex width="1200px" margin="auto" justifyContent="space-between">
        <Box>
            {
              MENU.map((menu) =>(
                <>
                  <div className="menu_title">{menu.name}</div>
                  <Flex flexWrap="wrap">
                    {
                      menu?.items.map((item) => (
                        <div className="menu_card">
                          <Flex justifyContent="space-between" height="100%" alignItems="center">
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
                        </div>
                      ))
                    }
                  </Flex>
               </>
              ))
            }
        </Box>
      </Flex>
    </>
  )
}