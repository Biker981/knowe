import React from 'react';

const SummaryPage = () => {
	return (
		<div>
			<h1>Summary Page</h1>
			<div className="date">
				Today is {Date(Date.now())}
			</div>
			<div>
				I Owe: $Amount.00
			</div>
			<div>
				I'm owed: $100.00
			</div>
			<div>
				Num Due Today: 30
			</div>
			<div>
				Num Loans Past Due
			</div>
		</div>
		)
}

export default SummaryPage;