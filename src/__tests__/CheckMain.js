jest.dontMock('../components/Main');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Main = require('../components/Main').default;

describe('Main', () => {
	it('should exists', function() {
    	// Render into document
		const main = TestUtils.renderIntoDocument(
			<Main children="" />
		);
    	expect(TestUtils.isCompositeComponent(main)).toBeTruthy();
  	});

	it('renders a menu', () => {
		const main = TestUtils.renderIntoDocument(
			<Main children="" />
		);

		const menu = TestUtils.findRenderedDOMComponentWithClass(main, "menu");
		expect(menu).toBeDefined();
	});
});