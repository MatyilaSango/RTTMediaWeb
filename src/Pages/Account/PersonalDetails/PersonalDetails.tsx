import "./PersonalDetails.css"
import { IAccountDetails } from '../../../types/types'
import { useState } from "react"
import loadingIcon from "../../../icons/update.svg"

export default function PersonalDetails({ object, dispatch }: IAccountDetails) {
    const [isUpdating, setIsUpdating] = useState<boolean>(false)

    const handlePersonalFormDetails = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isUpdating) {
            let updatingUserObject: any = {
                Uid: object.Uid
            }

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

            if(Object.keys(updatingUserObject).length > 1){
                // const userResponse = await (await fetch("https://rrt-media-server-api.vercel.app/api/v1/users", {
                //     method: "POST",
                //     headers: {
                //     "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(updatingUserObject)
                // })).json()
        
                // if(!userResponse.ok) {
                //     setIsUpdating(prev => prev = false)
                //     return
                // }
            }
        }
    }

    return (
        <div className="PersonalDetails-wrapper">
            <h3 className="PersonalDetails__heading">Personal Details</h3>
            <form onSubmit={handlePersonalFormDetails} className="PersonalDetails__form">
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>First Name</span>
                    </div>
                    <input type="text" value={object.FirstName} placeholder="First Name" name="FirstName" required />
                </div>
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>Last Name</span>
                    </div>
                    <input type="text" value={object.LastName} placeholder="Last Name" name="LastName" required />
                </div>
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>Email</span>
                    </div>
                    <input type="text" value={object.Email} placeholder="Email" name="Email" required />
                </div>
                <div className="PersonalDetails__form-input">
                    <div>
                        <span>Username</span>
                    </div>
                    <input type="text" value={object.Username} placeholder="Username" name="Username" required />
                </div>
                <button className="PersonalDetails__form-btn" type="submit">
                    {isUpdating ? <img className="loading" alt="" src={loadingIcon} /> : "Save"}
                </button>
            </form>
        </div>
    )
}
