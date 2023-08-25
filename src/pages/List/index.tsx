import { Accordion, Box, Flex, Header } from "@/components";
import { useLocation } from "react-router";

export const List = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const id = queryParams.get("id") || "";

	console.log(id);

	return (
		<>
			<Header />
			<Flex width="1350px" margin="auto" justifyContent="space-between">
				<Box width="930px">
					<Accordion
						items={[
							{
								id: "1",
								title: "测试",
								children: <>测试</>,
              },
              {
								id: "2",
								title: "测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试",
								children: <>测试</>,
							},
              {
								id: "3",
								title: "测试",
								children: <>测试</>,
							},{
								id: "4",
								title: "测试",
								children: <>测试</>,
							},{
								id: "5",
								title: "测试",
								children: <>测试</>,
							},{
								id: "6",
								title: "测试",
								children: <>测试</>,
							},{
								id: "7",
								title: "测试",
								children: <>测试</>,
							},{
								id: "8",
								title: "测试",
								children: <>测试</>,
							},
						]}
					/>
				</Box>
				<Box width="260px"></Box>
			</Flex>
		</>
	);
};
