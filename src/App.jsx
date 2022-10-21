import Header from './components/header/Header';

import Request from './components/request-component/Request';
import { Footer } from './components/footer/Footer';
import { GeneralContainer } from './GlobalStyle';

function App() {
	return (
		<>
			<GeneralContainer>
				<Header />
				<Request />
			</GeneralContainer>
			<Footer />
		</>
	);
}

export default App;
