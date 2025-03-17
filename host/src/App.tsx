import React from "react";
import "./App.css";
import "remote/RemoteCss";
import { counterAtom } from "remote/RemoteStore";
import { useAtom } from "jotai";

const RemoteButton = React.lazy(() => import("remote/Button"));

const App = () => {
	const [count, setCount] = useAtom<number>(counterAtom);

	const handleButtonClick = () => {
		setCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<p className="text-2xl font-bold text-blue-500">Host App</p>
			<React.Suspense fallback="Loading Button">
				<RemoteButton onClick={handleButtonClick} />
				<p className="text-2xl font-bold text-blue-500">{count}</p>
			</React.Suspense>
		</div>
	);
};

export default App;
