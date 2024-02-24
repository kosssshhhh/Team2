// NOTE: Example custom hooks

import React from 'react';
import { useState } from 'react';

export default function useInput(initialValue) {
	const [value, setValue] = useState(initialValue);
	const onChange = (e) => {
		setValue(e.target.value);
	};
	return { value, onChange };
}
