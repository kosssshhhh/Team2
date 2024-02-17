import { useBearStore } from './stores/store';

export default function App() {
	const { bears, increasePopulation, removeAllBears } = useBearStore((state) => state);
	console.log(bears);
	console.log(increasePopulation);
	return (
		<>
			<h1>{bears} around here ... </h1>
			<button onClick={increasePopulation}>one up</button>
			<button onClick={removeAllBears}>remove all</button>
		</>
	);
}
