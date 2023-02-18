import { useTranslation } from "react-i18next"
import './Header.css'
const lngs = [
     {abbr : 'ar' ,    nativeName : "Arabic"},
     {abbr : 'en' ,  nativeName : "English"},
   ]

function Header({score}){

    const {t , i18n} = useTranslation()

    return (
        <header className="app-header">
            <span className="score">Score : {score}</span>
            <div className="lang-list">
                {
                    lngs.map(lng  => <button className={` lang ${(i18n.resolvedLanguage === lng.abbr) ? "active" : ""  } `} type="submit" key={lng.abbr} onClick={()=> {
                            i18n.changeLanguage(lng.abbr) ; 
                            
                        }}  > {lng.abbr} </button>
                    )
                }
            </div>
        </header>

    )

}
export default Header