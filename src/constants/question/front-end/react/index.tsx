import { IQuestionsType } from "../../types";

export const ReactQuestions: IQuestionsType = [
  {
		id: "react1",
		title: "React中key的作用",
		children: (
			<>
				<p>
          在 React 中，key 是用于标识列表中每个元素的特殊属性。当你在使用 map() 或任何循环生成多个组件或元素时，key 属性必须被包含在生成的元素中。
				</p>
        <ul>
          <li>
            <span className="title">元素的唯一标识:</span> key 用于唯一标识列表中的每个元素。这样 React 在进行元素更新时可以准确地定位到每个元素，提高渲染性能和效率。
          </li>
          <li>
            <span className="title">元素的重用:</span> React 使用 key 来跟踪元素的身份。当元素的 key 保持不变时，React 会假设这是相同的元素，并尝试更新它，而不是重新创建。这在列表重新排序或有新元素插入时尤其有用。
          </li>
          <li>
            <span className="title">优化列表更新:</span> 通过为列表元素提供稳定的唯一标识，React 可以高效地计算出列表的差异，并仅更新实际发生变化的元素。这样可以减少不必要的 DOM 操作，提高性能。
          </li>
        </ul>
			</>
		),
  },
  {
		id: "react2",
		title: "用index作为key可能会引发的问题",
		children: (
			<>
        <ul>
          <li>
          若对列表进行了逆序添加或删除时，会产生没有必要的真实DOM更新。
          </li>
          <li>
          若结果中还有如input等输入类DOM就会产生错误DOM更新。
          </li>
          <li>
            其他情况可以用index作为key，但不推荐。
          </li>
        </ul>
			</>
		),
  },
	{
		id: "react3",
		title: "React中setState后发生了什么",
		children: (
			<>
				<p>
					在代码中调用setState函数之后，React
					会将传入的参数对象与组件当前的状态合并，然后触发调和过程(Reconciliation)。经过调和过程,React
					会以相对高效的方式根据新的状态构建 React
					元素树并且着手重新渲染整个UI界面。
				</p>
				<p>
					在 React 得到元素树之后，React
					会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。在差异计算算法中，React
					能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。
				</p>
				<p>
					如果在短时间内频繁setState。React会将state的改变压入栈中，在合适的时机，批量更新state和视图，达到提高性能的效果。
				</p>
			</>
		),
  },
];