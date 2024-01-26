
export interface ISubscriptionPlans {
    plans: any[]
}

export interface IHome {
    setIsSignInSinUp: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ISignIn {
    setIsSignInSinUp: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ISignUp {
    setIsSignInSinUp: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ILayout {
    isSignInSinUp: boolean
    children: JSX.Element
}

export interface IHeader {
    isSignInSinUp: boolean
}