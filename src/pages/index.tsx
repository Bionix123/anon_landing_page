import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Scroll
import Scroll from 'react-scroll';

// Components
import MainRoute from '../components/pages/main';

// Utils
import get from 'lodash/get';

// Actions
import { setScrollElement } from '../actions';

// Constants
import {
	SEO_DESCRIPTION,
	SEO_KEYWORDS
} from '../settings';

interface Props {
	doClearScrollElement(): void,
	scrollElement?: any
}

interface State {

}

class MainPage extends React.Component<Props, State> {
	componentDidMount() {
		this.handleScroll();
	}

	handleScroll() {
		const { doClearScrollElement, scrollElement } = this.props;

		if (scrollElement) {
			Scroll.scroller.scrollTo(scrollElement, {
				smooth: true,
				offset: -165
			});

			doClearScrollElement();
		}
	}

	render() {
		return (
			<React.Fragment>
				<Helmet>
					<title>Best dedicated proxies and SOCKSv5</title>
					<meta name="description" content={SEO_DESCRIPTION} />
					<meta name="keywords" content={SEO_KEYWORDS} />
					<script async src="https://www.googletagmanager.com/gtag/js?id=UA-148896132-1"></script>
					<script>
						{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'UA-148896132-1');
						`}
					</script>

					<script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-MD2MLXH');`}</script>


				</Helmet>

				<MainRoute />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	scrollElement: get(state, 'core.scrollElement', null)
});

const mapDispatchToProps = (dispatch) => ({
	doClearScrollElement: () => dispatch(setScrollElement(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
