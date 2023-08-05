import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import AppContextProvider from './components/AppContextProvider';
import ConfirmedBooking from './components/ConfirmedBooking';

import './styles/common.scss';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/reservations" element={<Reservations />} />
        <Route exact path="/orderOnline" element={<OrderOnline />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
    <AppContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/reservations" element={<Reservations />} />
          <Route exact path="/orderOnline" element={<OrderOnline />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/bookingPage" element={<BookingPage />} />
          <Route exact path="/confirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </Router>
    </AppContextProvider>

  );
}
