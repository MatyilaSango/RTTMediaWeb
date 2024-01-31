import { IConfirmation } from "../../types/types";
import "./Confirmation.css"
import doneIcon from "../../icons/done.svg"

export default function Confirmation({message, func}: IConfirmation) {
  return (
    <div className='Confirmation-wrapper center'>
        <div className="Confirmation-wrapper__cont">
            <div className="Confirmation-wrapper__cont-icon center">
                <img alt="done" src={doneIcon} />
            </div>
            <div className="Confirmation-wrapper__cont-Head center">
                <span>Done</span>
            </div>
            <div className="Confirmation-wrapper__cont-message center">
                <span>{message}</span>
            </div>
            <div className="Confirmation-wrapper__cont-btn-wrapper center">
                <div className="btn conf-btn" onClick={() => func()}>
                    <span>Close</span>
                </div>
            </div>
        </div>
    </div>
  )
}
