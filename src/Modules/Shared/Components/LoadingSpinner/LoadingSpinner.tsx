import {CgSpinnerTwoAlt} from "react-icons/cg";

const LoadingSpinner = ({...props}) => {
    return (
        <CgSpinnerTwoAlt {...props} className="animate-spin"/>
    )
}
export default LoadingSpinner
