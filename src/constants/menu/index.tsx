import reactIcon from '@/assets/icons/front-end/react.svg'

type IMenuType = {
  id: string,
  name: string,
  items: {
    id: string,
    name: string,
    icon: string,
    description: string,
  }[]
}[]

export const MENU: IMenuType = [
  {
    id: 'front-end',
    name: '前端',
    items: [
      {
        id: 'react',
        name: 'React',
        icon: reactIcon,
        description: 'React是一个用于构建用户界面的JavaScript库。它采用组件化的开发方式,通过将界面拆分成独立的可重用组件,使得开发者能够更加高效地构建复杂的应用程序。'
      }
    ]
  },
  {
    id: 'back-end',
    name: '后端',
    items: []
  }
]