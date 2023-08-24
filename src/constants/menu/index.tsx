import reactIcon from '@/assets/icons/react.svg'
import eslintIcon from '@/assets/icons/eslint.svg'
import htmlIcon from '@/assets/icons/html.svg'
import javaScrtiptIcon from '@/assets/icons/javascript.svg'
import nestjsIcon from '@/assets/icons/nestjs.svg'
import nodejsIcon from '@/assets/icons/nodejs.svg'
import pythonIcon from '@/assets/icons/python.svg'
import typeScriptIcon from '@/assets/icons/typescript.svg'
import vueIcon from '@/assets/icons/vue.svg'
import yarnIcon from '@/assets/icons/yarn.svg'

type IMenuType = {
  id: string,
  name: string,
  items: {
    id: string,
    name: string,
    icon: string,
    link: string,
    description: string,
  }[]
}[]

export const MENU: IMenuType = [
  {
    id: 'front-end',
    name: '前端',
    items: [
      {
        id: 'javascript',
        name: 'Javascript',
        icon: javaScrtiptIcon,
        link: '/list?id=javscript',
        description: 'JavaScript(简称JS)是一种常用的脚本编程语言,用于在网页上实现交互效果和动态功能。'
      },
      {
        id: 'react',
        name: 'React',
        icon: reactIcon,
        link: '/list?id=react',
        description: 'React是一个用于构建用户界面的JavaScript库。它采用组件化的开发方式,通过将界面拆分成独立的可重用组件,使得开发者能够更加高效地构建复杂的应用程序。'
      },
      {
        id: 'vue',
        name: 'Vue',
        icon: vueIcon,
        link: '/list?id=vue',
        description: 'Vue是一种流行的JavaScript框架,用于构建用户界面。它采用了基于组件的开发模式,通过将界面拆分成独立的可复用组件，使得开发者能够更加高效和模块化地构建复杂的应用程序。'
      },
      {
        id: 'typescript',
        name: 'TypeScript',
        icon: typeScriptIcon,
        link: '/list?id=typescript',
        description: 'TypeScript(简称TS)是一种静态类型的JavaScript超集语言,它为JavaScript提供了类型检查和编译时静态类型化的能力。'
      },
      {
        id: 'html',
        name: 'HTML',
        icon: htmlIcon,
        link: '/list?id=html',
        description: 'React是一个用于构建用户界面的JavaScript库。它采用组件化的开发方式,通过将界面拆分成独立的可重用组件,使得开发者能够更加高效地构建复杂的应用程序。'
      },
    ]
  },
  {
    id: 'back-end',
    name: '后端',
    items: [
      {
        id: 'node',
        name: 'Node',
        icon: nodejsIcon,
        link: '/list?id=node',
        description: 'Node.js是一个基于Chrome V8引擎的JavaScript运行时环境,用于构建高性能的网络应用程序。'
      },
      {
        id: 'nest',
        name: 'Nest',
        icon: nestjsIcon,
        link: '/list?id=nest',
        description: 'Nest是一个用于构建高效、可扩展和模块化的服务器端应用程序的Node.js框架。它基于Express.js,并结合了面向对象编程、函数式编程和响应式编程的概念,提供了一个优雅的开发体验。'
      },
      {
        id: 'python',
        name: 'Python',
        icon: pythonIcon,
        link: '/list?id=python',
        description: 'Python是一种简单易学、高效且功能强大的编程语言。它注重代码的可读性和简洁性,使得开发者能够以更少的代码完成更多的任务。'
      },
    ]
  },
  {
    id: 'others',
    name: '其他',
    items: [
      {
        id: 'yarn',
        name: 'Yarn',
        icon: yarnIcon,
        link: '/list?id=yarn',
        description: 'Yarn是一个快速、可靠且安全的软件包管理工具,用于管理JavaScript和Node.js项目的依赖关系。它作为npm的替代品,提供了更快的下载速度和更可靠的依赖版本管理。'
      },
      {
        id: 'eslint',
        name: 'ESLint',
        icon: eslintIcon,
        link: '/list?id=eslint',
        description: 'ESLint是一个用于检测和纠正JavaScript代码中潜在问题和错误的静态代码分析工具。它可以帮助开发者遵循一致的代码风格和最佳实践,提高代码质量和可维护性。'
      },
    ]
  }
]