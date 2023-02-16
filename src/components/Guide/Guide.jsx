import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import './Guide.css'
function Guide() {

    const { t } = useTranslation()
    const [isHidden, setIsHidden] = useState(true);

    return (

        <div className="guide-container" >

            <button className="guide-switch" type="submit" onClick={() => {
                setIsHidden(!isHidden);
            }} > {t('guide.switch')} </button>

            <div className={`guide-modal ${isHidden ? "guide-is-hidden" : ""}`}>
                <header className="guide-header" >
                    <h2 className="guide-heading" >{t("guide.heading")}</h2>
                    <button className="guide-close" type="submit" onClick={()=> {
                        setIsHidden(true)
                    }} >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3 0.71001C13.2075 0.617307 13.0976 0.543759 12.9766 0.493577C12.8556 0.443396 12.7259 0.417566 12.595 0.417566C12.464 0.417566 12.3343 0.443396 12.2134 0.493577C12.0924 0.543759 11.9825 0.617307 11.89 0.71001L6.99998 5.59001L2.10998 0.70001C2.0174 0.607428 1.90749 0.533988 1.78652 0.483883C1.66556 0.433778 1.53591 0.40799 1.40498 0.40799C1.27405 0.40799 1.1444 0.433778 1.02344 0.483883C0.902472 0.533988 0.792561 0.607428 0.699979 0.70001C0.607397 0.792592 0.533957 0.902502 0.483852 1.02347C0.433747 1.14443 0.407959 1.27408 0.407959 1.40501C0.407959 1.53594 0.433747 1.66559 0.483852 1.78655C0.533957 1.90752 0.607397 2.01743 0.699979 2.11001L5.58998 7.00001L0.699979 11.89C0.607397 11.9826 0.533957 12.0925 0.483852 12.2135C0.433747 12.3344 0.407959 12.4641 0.407959 12.595C0.407959 12.7259 0.433747 12.8556 0.483852 12.9766C0.533957 13.0975 0.607397 13.2074 0.699979 13.3C0.792561 13.3926 0.902472 13.466 1.02344 13.5161C1.1444 13.5662 1.27405 13.592 1.40498 13.592C1.53591 13.592 1.66556 13.5662 1.78652 13.5161C1.90749 13.466 2.0174 13.3926 2.10998 13.3L6.99998 8.41001L11.89 13.3C11.9826 13.3926 12.0925 13.466 12.2134 13.5161C12.3344 13.5662 12.464 13.592 12.595 13.592C12.7259 13.592 12.8556 13.5662 12.9765 13.5161C13.0975 13.466 13.2074 13.3926 13.3 13.3C13.3926 13.2074 13.466 13.0975 13.5161 12.9766C13.5662 12.8556 13.592 12.7259 13.592 12.595C13.592 12.4641 13.5662 12.3344 13.5161 12.2135C13.466 12.0925 13.3926 11.9826 13.3 11.89L8.40998 7.00001L13.3 2.11001C13.68 1.73001 13.68 1.09001 13.3 0.71001Z" fill="black" />
                        </svg>
                    </button>



                </header>
                <div className="guide-text">

                    <Trans i18nKey="guide.body" >
                        <p>
                            In dib game, players take turns with the Ai saying one of three specific words in a particular order: "cheti dib," "chefto," and "cheti ke3lalto."
                        </p>
                        <p>
                            The objective of the game is to continue the loop of these three words in the correct order without making a mistake or hesitating.
                        </p>
                        <p>
                            For Example : if the Ai says : “chefti dib” you should click “chefto” .
                        </p>
                        <p>
                            or if the Ai says : “cheti ke3lalto” then you click “chefti dib”. and so on.
                        </p>
                    </Trans>

                </div>
            </div>

        </div>


    )

}

export default Guide; 