import { Accordion, Box, Flex, Header } from "@/components";
import { QUESTIONS } from "@/constants";
import { useLocation } from "react-router";

import "./index.css";

export const List = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const name = queryParams.get("name") || "";

	return (
		<div className="list">
			<Header />
			<Flex
				width="1350px"
				margin="auto"
				justifyContent="space-between"
				alignItems="start"
			>
				<Box width="930px">
					<Accordion items={QUESTIONS[name]} />
				</Box>
				<Box width="260px"></Box>
			</Flex>
		</div>
	);
};
