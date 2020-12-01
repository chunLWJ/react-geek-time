import React, {useContext, useState} from "react";


const enStrings = {
    submit: "Submit",
    cancel: "Cancel"
};

const cnStrings = {
    submit: "提交",
    cancel: "取消"
};


const LocaleContext = React.createContext(cnStrings)
export function LocaleProvider(props){
    const [locale,setLocale] = useState(cnStrings)
    let toggleLocale = () => {
        setLocale((prevState => {
            return prevState === enStrings ? cnStrings : enStrings
        }))
    }
    return (
        <LocaleContext.Provider value={locale}>
            <button onClick={toggleLocale} >切换语言</button>
            {props.children}
        </LocaleContext.Provider>
    )
}

function HooksLocaleButtons(){
    const {submit,cancel} = useContext(LocaleContext)
    return (
        <div>
            <button>{cancel}</button>
            <button>{submit}</button>
        </div>
    )
}
function LocaleButtons(){

    return (
        <LocaleContext.Consumer>
            {locale => {
                return (
                    <div>
                        <button>{locale.cancel}</button>
                        <button>{locale.submit}</button>
                    </div>
                )
            }}
        </LocaleContext.Consumer>
    )
}

export default () => (
    <div>
        <LocaleProvider>
            <div>
                <br />
                <LocaleButtons />
                <HooksLocaleButtons />
            </div>
        </LocaleProvider>

        <LocaleButtons />
        <HooksLocaleButtons />
    </div>
)