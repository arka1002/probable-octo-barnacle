import DCF from "./DCF";
import ScoreCard from "./ScoreCard";

export default function ConditionalConnector({ tab }) {
    if (tab === 'dcf') {
        return (<DCF/>)
    } else if (tab === 'sc') {
        return (<ScoreCard/>);
    } else {
        return (<>Yet to be done!</>)
    }
};
