import { Provider } from "react-redux"
import store from "./store"
import router from "./router"
import { RouterProvider } from "react-router-dom"
import Loader from "./component/loader"

export default (props) => {

  return <>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
      <Loader />
    </Provider>
  </>
}