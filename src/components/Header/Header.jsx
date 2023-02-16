import { useTranslation } from "react-i18next"
import './Header.css'
const lngs = [
     {abbr : 'ar' ,    nativeName : "Arabic"},
    {abbr : 'tm' ,  nativeName : "Tamazight"},
     {abbr : 'en' ,  nativeName : "English"},
     {abbr : 'fr' ,  nativeName : "Francais"},]

function Header(){

    const {t , i18n} = useTranslation()

    return (
        <header className="app-header">
            <span className="score">Score : 0</span>
            <div className="lang-list">
                {
                    lngs.map(lng  => <button className={` lang ${(i18n.resolvedLanguage === lng.abbr) ? "active" : ""  } `} type="submit" key={lng.abbr} onClick={()=> {
                            i18n.changeLanguage(lng.abbr) ; 
                            console.log(i18n.resolvedLanguage)
                        }}  > {lng.abbr} </button>
                    )
                }
            </div>
        </header>

    )

}
export default Header