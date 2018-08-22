import React from 'react';

const OwedToMePage = () => {
	return (
		<div>
			<h1>Owed To Me Page</h1>
			<div>
				<h3>Filter</h3>
			</div>
			<table>
				<th>
					<td>Due Date</td>
					<td>Name</td>
					<td>Amount Borrowed</td>
					<td>Interest Accrued</td>
					<td>Amount Owed</td>
				</th>
				<tbody>
					<td>{Date.now().toString()}</td>
					<td>Donald Trump</td>
					<td>$2.00</td>
					<td>$1.00</td>
					<td>$3.00</td>
				</tbody>
			</table>
		</div>
		)
}

export default OwedToMePage;