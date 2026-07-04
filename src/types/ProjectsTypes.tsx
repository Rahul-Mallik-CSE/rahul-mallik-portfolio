export type ProjectItem = {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	image: string;
	liveLink?: string;
	codeLink?: string;
	featured?: boolean;
};
