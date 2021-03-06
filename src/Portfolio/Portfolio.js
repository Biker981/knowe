import React, { Component } from 'react';
import './Portfolio.css';
import SummaryPage from '../SummaryPage/SummaryPage.js';
import IOwePage from '../IOwePage/IOwePage.js';
import OwedToMePage from '../OwedToMePage/OwedToMePage.js';

class Portfolio extends Component {
	//maps route to component so portfoliobody changes on tab click  
     portfolioRouteToComponentMap = {
		iOwe: <IOwePage />,
		summary: <SummaryPage/>,
		owedToMe: <OwedToMePage />,
	}
	constructor() {
		super();
		this.state = {
			portfolioRoute: ''
		}
	}

	changePortfolioRoute = (route) => (event) => {
		this.setState({portfolioRoute: route}, () => {
			this.changePortfolioStyle(this.state.portfolioRoute);
		});
		
		
	}

	changePortfolioStyle = (route = this.state.portfolioRoute) => {
		const portfolioBody = document.querySelector('#portfolioBody');
		// if (!portfolioBody) {
		// 	return;
		// }
		switch (route) {
			case 'summary':
				portfolioBody.className = 'portfolioSummary';
				break;
			case 'owedToMe':
				portfolioBody.className = 'portfolioOwedToMe';
				break;
			case 'iOwe':
				portfolioBody.className = 'portfolioIOwe';
				break;
			default: 
				portfolioBody.className = 'portfolioDefault';
		}
	}

	render() {
		//Render a different portflio body component based on the route

		//Make Portfolio Body match the tab styling
		return (
			<div>
				<h2>Portfolio</h2>
				<br/>
				<div className="portfolioGridContatiner">
					<div className='tabs'>
						<div style={{backgroundColor:'blue'}} onClick={this.changePortfolioRoute('summary')}>Summary</div>
						<div style={{backgroundColor:'yellow'}} onClick={this.changePortfolioRoute('owedToMe')}>Owed To Me</div>
						<div style={{backgroundColor:'red'}} onClick={this.changePortfolioRoute('iOwe')}>I Owe</div>
					</div>
					<div className="portfolioEmptySpace">
					
					</div>
					<div id="portfolioBody">
					{this.portfolioRouteToComponentMap[this.state.portfolioRoute]}
					</div>
				</div>
				
			</div>
			);
	}
}

export default Portfolio;