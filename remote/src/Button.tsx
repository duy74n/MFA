const Button = ({ onClick }: { onClick: () => void }) => (
	<button
		type="button"
		className="p-2 rounded border border-solid border-blue-500 cursor-pointer"
		onClick={onClick}
	>
		Remote Count Button
	</button>
);
export default Button;
