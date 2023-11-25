import React from 'react';
import SectionTitleBorder from "../common/SectionTitleBorder";

interface IProps {
	title: string;
	summary?: string;
}

const SectionTitle = ({ title, summary }: IProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>

			<div className="flex justify-center">
				<SectionTitleBorder />
			</div>
			{
				summary && (
					<p className="max-w-2xl text-center mx-auto mt-3 md:text-lg">{summary}</p>
				)
			}
		</div>
	);
};

export default SectionTitle;