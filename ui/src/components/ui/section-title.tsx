import React from 'react';

interface IProps {
	title: string;
	summary?: string;
}

const SectionTitle = ({ title, summary }: IProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<h2 className="text-2xl font-semibold text-primary">{title}</h2>
			{
				summary && (
					<p className="max-w-2xl text-center mx-auto mt-3 md:text-lg">{summary}</p>
				)
			}
		</div>
	);
};

export default SectionTitle;