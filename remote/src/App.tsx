import LocalButton from "./Button";
import "./App.css";
import { useAtom } from "jotai";
import { counterAtom } from "./store";

const App = () => {
	const [count, setCount] = useAtom(counterAtom);

	const handleButtonClick = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<h1>Basic Host-Remote</h1>
			<h2>Remote</h2>
			<LocalButton onClick={handleButtonClick} />
			<p className="text-2xl font-bold text-blue-500">{count}</p>
		</div>
	);
};

export default App;
