import Comparables from "./Comparables";
import DCF from "./DCF";
import ScoreCard from "./ScoreCard";
import VC from "./VC";

export default function ConditionalConnector({ tab }) {
    if (tab === 'dcf') {
        return (<DCF/>)
    } else if (tab === 'sc') {
        return (<ScoreCard/>);
    } else if (tab === 'vc') {
        return (<VC/>)
    }
    else if (tab === 'compara') {
        return (<Comparables/>)
    }
};
