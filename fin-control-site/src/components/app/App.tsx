import { fetchItems } from "@/store/items-data/actions";
import { useAppDispatch } from "@/utils/hooks";
import MainPage from "@pages/main-page/main-page"
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch,]);
  return (
    <>
    <MainPage/>
    </>
  )
}

export default App
