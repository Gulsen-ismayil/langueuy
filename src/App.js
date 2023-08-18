import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/Home/Home";
import Formation from "./pages/Formation/Formation";
import Footer from "./components/footer/Footer";
import { useTranslation } from 'react-i18next'


function App() {
  const [t, i18n] = useTranslation("global")
  const handleChangeLanguage = (lang: string) => {
      i18n.changeLanguage(lang)
  }

  return (
    <div className="App">
      <BrowserRouter>
      <div className="button">
            <button onClick={() => handleChangeLanguage("en")} >En</button>
            <button onClick={() => handleChangeLanguage("fr")} >Fr</button>
            <button onClick={() => handleChangeLanguage("ur")} >Ur</button>
            <button onClick={() => handleChangeLanguage("ch")} >Ch</button>
        </div>
        <Nav t={t()} i18n={i18n} />
        <Routes>
          <Route exact path="/" element={<Home t={t} i18n={i18n}/>}/>
          <Route path="/formation" element={<Formation />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
