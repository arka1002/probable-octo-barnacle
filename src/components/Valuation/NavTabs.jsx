import { useState } from "react";
import ConditionalConnector from "./ConditionalConnector";



export default function NavTabs() {
    const [ currentTab, setCurrentTab ] = useState('dcf');
    const defaultStyle = "py-3 px-4 cursor-pointer"
    const activeStyle = "py-3 px-4 cursor-pointer bg-white text-blue-400"
    return (
        <>
            <div className="p-2 rounded-lg bg-[#f3f3ff]">
                <div className="pt-4 flex justify-between items-center">
                    <div className="flex">
                        <div className={currentTab === 'dcf' ? activeStyle : defaultStyle} onClick={() => setCurrentTab('dcf')}>DCF</div>
                        <div className={currentTab === 'vc' ? activeStyle : defaultStyle} onClick={() => setCurrentTab('vc')}>VC</div>
                        <div className={currentTab === 'sc' ? activeStyle : defaultStyle} onClick={() => setCurrentTab('sc')}>Score Card</div>
                        <div className={currentTab === 'compara' ? activeStyle : defaultStyle} onClick={() => setCurrentTab('compara')}>Comparables</div>
                    </div>
                    <div>b</div>
                </div>
                <div><ConditionalConnector tab={currentTab}/></div>
            </div>
        </>
    )
};
