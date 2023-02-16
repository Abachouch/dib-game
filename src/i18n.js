import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector  from 'i18next-browser-languagedetector'

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    fallbackLng : 'en' , 
    resources : {
        en : {
            translation : {
                score : "Score" ,
                yourScore :"Your Score",
                youLost : 'You have Lost' ,
                buttons : {
                    playNow : "Play Now" ,
                    playAgain : "Play Again" ,
                    seeWolf : 'you saw the wolf ?',
                    iSawIt : "i saw it" ,
                    seeTail : "you saw his tail"
                } , 
                guide : {
                    switch : "How to play ?",
                    heading : "Guid" , 
                    body : '<0>In dib game, players take turns with the Ai saying one of three specific words in a particular order: "cheti dib," "chefto," and "cheti ke3lalto."</0><1> The objective of the game is to continue the loop of these three words in the correct order without making a mistake or hesitating. </1> <2> For Example : if the Ai says : “chefti dib” you should click “chefto” </2> <3> or if the Ai says : “cheti ke3lalto” then you click “chefti dib”.</3> and so on.'
                }
            }
        },
        ar : {
            translation : {
                hello : 'salam',
                guide : {
                    switch : "kifach tel33eb ?",
                    heading : "tari9a" , 
                    body : 'f had le3ba, players take turns with the Ai saying one of three specific words in a particular order: "cheti dib," "chefto," and "cheti ke3lalto."<1> The objective of the game is to continue the loop of these three words in the correct order without making a mistake or hesitating. </1> <2> For Example : if the Ai says : “chefti dib” you should click “chefto” </2> <3> or if the Ai says : “cheti ke3lalto” then you click “chefti dib”.</3> and so on.'
                }
            }
        },
        tm : {
            translation : {
                hello : 'azoul'
            }
        },
        fr : {
            translation : {
                hello : 'bonjour'
            }
        },
    }
})