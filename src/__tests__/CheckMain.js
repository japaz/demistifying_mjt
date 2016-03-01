jest.dontMock('../components/Main');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Main = require('../components/Main').default;

describe('Main', () => {
	it('render a menu', () => {
		var main = TestUtils.renderIntoDocument(
			<Main children="" />
		);
	});
});
