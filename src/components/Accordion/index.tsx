import React, { useState } from "react";
import "./index.css";

type ItemType = {
	id: string;
	title: string;
	children: React.ReactNode;
};

type AccordionProps = {
	items: ItemType[];
};

export const Accordion = ({ items }: AccordionProps) => {
	const [openItemId, setOpenItemId] = useState("");

	const handleToggle = (itemId: string) => {
		setOpenItemId((prevOpenItemId) =>
			prevOpenItemId === itemId ? "" : itemId
		);
	};

	return (
		<>
			{items.map((item) => (
				<div className="accordion" key={item.id}>
					<input
						type="checkbox"
						id={item.id}
						checked={openItemId === item.id}
						onChange={() => handleToggle(item.id)}
					/>
					<label htmlFor={item.id}>
						<div className="header">
							<div className="title">{item.title}</div>
							<div className="arrow">
								<span className="arrow_span1"></span>
								<span className="arrow_span2"></span>
							</div>
						</div>
					</label>
					<div className="children">{item.children}</div>
				</div>
			))}
		</>
	);
};
