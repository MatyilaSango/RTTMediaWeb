export interface ISubscriptionPlans {
    plans: any[]
}

export interface IHome {
    dispatch: React.Dispatch<any>
}

export interface IProducts {
    dispatch: React.Dispatch<any>
}

export interface ISignIn {
    dispatch: React.Dispatch<any>
}

export interface ISignUp {
    dispatch: React.Dispatch<any>
}

export interface ILayout {
    isSignInSinUp: boolean
    children: JSX.Element
}

export interface IHeader {
    isSignInSinUp: boolean
}