import { Code } from "@/components";
import { IQuestionsType } from "../../types";

export const JavaScriptQuestions: IQuestionsType = [
  {
    id: 'javascript1',
    title: 'let, const, var',
    children: (
      <>
        <p>
          通常我们会使用 let 定义会重复赋值的变量，用 const 定义常量或者引用地址不会发生改变的变量。
        </p>
        <p>
          需要注意的是 let 和 const 不会像 var 一样存在变量提升的问题，例如我们添加了 var a = 0 的时候，在作用域的顶部就会默认存在一次声明: var a; 而 let 和 const 不会，但这也会导致一个情况的发生：在声明这这句话之前不能像var一样读到undefined，而是ReferenceError，这就是暂时性死区问题。
        </p>
        <p>
          在 let 声明之前无法读取这个值，这也意味着typeof不是一个百分百安全的操作，因为在这种情况下会报错：ReferenceError。
        </p>
      </>
    )
  },
  {
    id: 'javascript2',
    title: 'let , const , var的一些区别',
    children: (
      <>
        <ul>
          <li>cosnt在声明时必须进行赋值，var和let不用。</li>
          <li>let 和 const都不能在同一作用域重复声明同一个变量 ={'>'} 这也意味着不能在函数内部声明参数。</li>
          <li>let 和 const 存在块级作用域，var没有。</li>
          <li>var存在变量提升，let 和 const 没有。</li>
          <li>let 和 const 存在暂时性死区，var没有。</li>
        </ul>
      </>
    )
  },
  {
    id: 'javascript3',
    title: '变量的解构赋值',
    children: (
      <>
        <h1>定义：</h1>
        <p>
          ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。
        </p>
        <h1>常见例子 :</h1>
        <Code language={"javascript"} code={`
            let [a, b, c] = [1, 2, 3];
            // a = 1 , b = 2 , c = 3
          `}></Code>
        <p>除此之外比较常用的还有：</p>
        <Code language={"javascript"} code={`
          // 给变量赋初值
          let [x = -1 , y = x] = [];
          // x = 1	y = -1
          
          // 覆盖这个初始值
          let [x = -1 , y = x] = [1, 1]
          // x = 1 y = 1; 
          
          // 注意参数的顺序
          let [x = y, y = 1] = []
          // 报错，不能在初始化y之前访问y(暂时性死区)
        `}></Code>
        <p>
          对于对象来说，解构赋值是一种非常方便的赋值方式，例如：
        </p>
        <Code language={"javascript"} code={`
          // 注意对象中是没有顺序的
          let { x, y } = {y: 1,x:2}
          // x = 2 y = 1
          // 这一点在实际开发中是非常方便的,比如我们在接收JSON后给变量赋值用这样的方法就非常快捷。
        `}></Code>
        <p>
          解构也可以用于对象嵌套：
        </p>
        <Code language={"javascript"} code={`
          let obj = {
            p: [
              'Hello',
              { y: 'World' }
            ]
          };
          
          let { p: [x, { y }] } = obj;
          x // "Hello"
          y // "World"
        `}></Code>
        <h1>
          需要注意的点
        </h1>
        <ul>
          <li>在解构赋值中赋值失败的变量会返回undefined。</li>
          <li>在解构赋值中，如果等号右边不可迭代，那么会报错。</li>
          <li>如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。</li>
        </ul>
      </>
    )
  },
  {
    id: 'javascript4',
    title: '浅拷贝和深拷贝',
    children: (<>
      <p>
        浅拷贝只拷贝了该对象的最外层，内层只拷贝了栈中的地址，所以会导致修改新对象的时候，原对象也发生相应的改变。深拷贝会在堆中开辟新的空间，拷贝了多层，即使该对象嵌套了多层也会全部拷贝出来，新的对象和原始对象互不干扰。
      </p>
      <h2>
        浅拷贝的方法 : 
      </h2>
      <ul>
        <li>
          直接赋值。
        </li>
        <li>
          Object.assign。
        </li>
      </ul>
      <h2>
        深拷贝的方法 (对象) : 
      </h2>
      <ul>
        <li>
          JSON.parse(JSON.stringify()) (注意无法实现对象中方法的拷贝)。
        </li>
        <li>
          递归。
        </li>
      </ul>
      <h2>
        深拷贝的方法 (数组) :
      </h2>
      <ul>
        <li>
          concat()
        </li>
        <li>
          slice()
        </li>
      </ul>
    </>)
  },
  {
		id: "javascript10",
		title: "自定义迭代器",
		children: (
			<>
				<Code language={"javascript"} code={`
          class Counter {
            constructor(limit){
                this.limit = limit;
            }
            [Symbol.iterator](){
                let count = 1,limit = this.limit
                return {
                    next(){
                        if(count <= limit){
                            return {
                                done:false,
                                value: count++
                            }
                        }else {
                            return {
                                done: true,
                                value: undefined
                            }
                        }
                    },
                    return(){
                        console.log('Exit early');
                        return {done: 'true'}
                    }
                }
            }
          }
        `}></Code>
			</>
		),
  },
];