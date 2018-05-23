import React, {
	Component
} from 'react';

import APPRouter from './router-path';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {
	render() {
		return(
			<APPRouter />
		)
	}
}