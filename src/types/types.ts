export interface ISubscriptionPlans {
  plans: any[];
}

export interface IHome {
  dispatch: React.Dispatch<IAction>;
}

export interface IProducts {
  dispatch: React.Dispatch<IAction>;
}

export interface IAccount {
  dispatch: React.Dispatch<IAction>;
}

export interface ISignIn {
  dispatch: React.Dispatch<IAction>;
}

export interface ISignUp {
  dispatch: React.Dispatch<IAction>;
}

export interface ILayout {
  isSignInSinUp: boolean;
  children: JSX.Element;
  isUserSignedIn: boolean
}

export interface IHeader {
  isSignInSinUp: boolean;
  isUserSignedIn: boolean
}

export interface IState {
  isSignInSinUp: boolean;
  userAccount: {};
  isUserSignedIn: boolean;
}

export interface IAction {
    type: string
    payload: any
}
