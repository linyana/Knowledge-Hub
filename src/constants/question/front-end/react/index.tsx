import { IQuestionsType } from "../../types";

export const ReactQuestions: IQuestionsType = [
	{
		id: "react1",
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
