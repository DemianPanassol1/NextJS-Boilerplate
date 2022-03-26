import React from 'react';
import PropTypes from 'prop-types';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
};

MyApp.propTypes = {
	Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
		.isRequired,
	pageProps: PropTypes.shape({}).isRequired,
};

export default MyApp;