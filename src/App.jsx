import AppRouter from "./router";
import { useEffect, useState } from "react";
import LoadingPage from "./pages/common/loading/page";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from './store/slice/auth/auth-slice';
import { services } from "./services";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      const token = services.encryptedLocalStorage.getItem("token");
      if (token) {
        // Token varsa, kullanıcı bilgisini al
        const userData = await services.user.getUser();
        dispatch(loginSuccess(userData));
      }
    } catch (error) {
      dispatch(loginFailure());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{loading ? <LoadingPage /> : <AppRouter />}</>;
}

export default App;



