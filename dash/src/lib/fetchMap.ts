import { MapType } from "@/types/map.type";

export const fetchMap = async (circuitKey: number): Promise<MapType> => {
	const year = new Date().getFullYear();
	console.log(`Fetching map for circuit ${circuitKey} in year ${year}`);
	console.log(`https://api.multiviewer.app/api/v1/circuits/${circuitKey}/${year}`);

	const mapRequest = await fetch(`https://api.multiviewer.app/api/v1/circuits/${circuitKey}/${year}`, {
		next: { revalidate: 60 * 60 * 2 },
	});

	const map: MapType = await mapRequest.json();
	return map;
};
