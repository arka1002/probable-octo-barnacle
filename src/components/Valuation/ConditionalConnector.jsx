import DCF from "./DCF";

export default function ConditionalConnector({ tab }) {
    console.log(tab);
    if (tab === 'dcf') {
        return (<DCF/>)
    } else {
        return (<>Hi Mom!</>)
    }
};
