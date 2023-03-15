import "../styles/globals.css";
import DataContextProvider from "../context/dataContext";
import stripAndPopulateData from "../utils/data-strip";

// const DataContextProvider = ({ children }) => {
//   return <dataContext.Provider>{children}</dataContext.Provider>;
// };

function MyApp({ Component, pageProps }) {
  const check = stripAndPopulateData();
  return (
    <DataContextProvider>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </DataContextProvider>
  );
}

export default MyApp;
