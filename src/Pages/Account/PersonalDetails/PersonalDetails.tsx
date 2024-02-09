import "./PersonalDetails.css"
import { IAccountDetails } from '../../../types/types'
import { useRef, useState } from "react"
import loadingIcon from "../../../icons/update.svg"
import axios from "axios"
import { ACCOUNT } from "../../../enums/enum"
import Confirmation from "../../../Components/Confirmation/Confirmation"

export default function PersonalDetails({ object, dispatch }: IAccountDetails) {
    const [isUpdatingPersonal, setIsUpdatingPersonal] = useState<boolean>(false)
    const [isUpdatingPassword, setIsUpdatingPassword] = useState<boolean>(false)
    const [isUpdated, setIsUpdated] = useState<boolean>(false)
    let incorrectPasswordsRef = useRef(false)

    const handlePersonalFormDetails = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isUpdatingPersonal) {
            setIsUpdatingPersonal(prev => prev = true)
            let updatingUserObject: any = {}

            // setIsUpdating(prev => prev = true)
            const inputValues = Array.from(e.currentTarget)
            //@ts-ignore
            const firstName: string = inputValues[0].value
            if(firstName !== object.FirstName) updatingUserObject["FirstName"] = firstName
            //@ts-ignore
            const lastName: string = inputValues[1].value
            if(lastName !== object.LastName) updatingUserObject["LastName"] = lastName
            //@ts-ignore
            const email: string = inputValues[2].value
            if(email !== object.Email) updatingUserObject["Email"] = email
            //@ts-ignore
            const username: string = inputValues[3].value
            if(username !== object.Username) updatingUserObject["Username"] = username

            if(Object.keys(updatingUserObject).length > 0){
                axios.put("https://rrt-media-server-api.vercel.app/api/v1/user", updatingUserObject)
                .then(promise => promise.data)
                .then(response => {
                    if(response.ok){
                        setIsUpdatingPersonal(prev => prev = false)
                        dispatch({type: ACCOUNT.Updated, payload: {account: response.data}})
                        setIsUpdated(prev => prev = true)
                    }
                }).catch(error => {
                    setIsUpdatingPersonal(prev => prev = false)
                    alert(error.message)
                })
            }
        }
    }

    const handleNewPasswordFormDetails = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isUpdatingPassword) {
            setIsUpdatingPassword(prev => prev = true)
            // setIsUpdating(prev => prev = true)
            const inputValues = Array.from(e.currentTarget)

            //@ts-ignore
            const password: string = inputValues[0].value
            //@ts-ignore
            const confirmedPassword: string = inputValues[1].value

            incorrectPasswordsRef.current = false
            if(password !== confirmedPassword) {
                incorrectPasswordsRef.current = true
                setIsUpdatingPassword(prev => prev = false)
                return
            }

            axios.put("https://rrt-media-server-api.vercel.app/api/v1/user", {Password: password})
            .then(promise => promise.data)
            .then(response => {
                if(response.ok){
                    setIsUpdatingPassword(prev => prev = false)
                    dispatch({type: ACCOUNT.Updated, payload: {account: response.data}})
                    setIsUpdated(prev => prev = true)
                }
            }).catch(error => {
                setIsUpdatingPassword(prev => prev = false)
                alert(error.message)
            })
        }
    }

    return (
        <div className="PersonalDetails-wrapper">
            {isUpdated ? <Confirmation message="Updated successfully." func={() => {setIsUpdated(prev => prev = false)}}/> : ""}
            <h3 className="PersonalDetails__heading">Personal Details</h3>
            <form onSubmit={handlePersonalFormDetails} className="PersonalDetails__form">
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>First Name</span>
                    </div>
                    <input type="text" defaultValue={object.FirstName} placeholder="First Name" name="FirstName" required />
                </div>
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>Last Name</span>
                    </div>
                    <input type="text" defaultValue={object.LastName} placeholder="Last Name" name="LastName" required />
                </div>
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>Email</span>
                    </div>
                    <input type="text" defaultValue={object.Email} placeholder="Email" name="Email" required />
                </div>
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>Username</span>
                    </div>
                    <input type="text" defaultValue={object.Username} placeholder="Username" name="Username" required />
                </div>
                <button className="PersonalDetails__form-btn" type="submit">
                    {isUpdatingPersonal ? <img className="loading" alt="" src={loadingIcon} /> : "Save"}
                </button>
            </form>

            <div className="PersonalDetails__heading "></div>
            <form onSubmit={handleNewPasswordFormDetails} className="PersonalDetails__form">
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>New password</span>
                    </div>
                    <input type="password" placeholder="New password" name="password" required />
                </div>
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>Confirm new password</span>
                    </div>
                    <input type="password" placeholder="Confirm new password" name="confirmNewPassword" required />
                </div>
                <div className={`SignUp_wrapper__body_form_wrapper__incorrect_SignUp_details ${incorrectPasswordsRef.current ? 'show' : ''}`}>Passwords do not match...</div>
                <button className="PersonalDetails__form-btn" type="submit">
                    {isUpdatingPassword ? <img className="loading" alt="" src={loadingIcon} /> : "Save"}
                </button>
            </form>
        </div>
    )
}
