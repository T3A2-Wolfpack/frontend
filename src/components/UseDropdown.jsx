import { useState } from "react";

const Dropdown = (label, defaultState, options) => {
	const [state, setState] = useState(defaultState)
	const DropdownMaker = () => (
		<label htmlFor={label}>
			{label}
				<select
					id={label}
					value={state}
					onChange={e => setState(e.target.value)}
					onBlur
				>
					<option>All</option>
				</select>
		</label>
  )
}