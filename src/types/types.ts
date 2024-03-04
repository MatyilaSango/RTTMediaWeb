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
  userAccount: {
    [name: string]: any;
  };
}

export interface ISignIn {
  dispatch: React.Dispatch<IAction>;
}

export interface ISignUp {
  dispatch: React.Dispatch<IAction>;
}

export interface IAccountDetails {
  dispatch: React.Dispatch<IAction>;
  object: {
    [name: string]: any;
  };
}

export interface IProductCard {
  backgroundColor: string;
  name: string;
  description: string;
  image: string;
}

export interface IConfirmation {
  message: string;
  func: () => void;
}

export interface ILayout {
  isSignInSinUp: boolean;
  children: JSX.Element;
  isUserSignedIn: boolean;
}

export interface IHeader {
  isSignInSinUp: boolean;
  isUserSignedIn: boolean;
}

export interface IState {
  isSignInSinUp: boolean;
  userAccount: {};
  isUserSignedIn: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface ISupportCard {
  image: string;
  description: string;
}

export interface ISubscription {
  userSubscription: {
    [name: string]: any;
  }
}

export interface IItem {
  name: string,
  detail: string
}

export interface IHowToUse{
  name: string
  bgColor: string
}

export interface IHowToUseItemCard{
  title: string,
  steps: IStepCard[]
}

export interface IStepCard{
  previewShot: string
  heading: string
  body: string
}