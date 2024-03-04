import rdPreview from "../icons/ReddderDownloader-preview.png"
import twPreview from "../icons/TwiMedia-preview.png"
import tmPreview from "../icons/TumMedia-preview.png"
import TmLoginStep1 from "../icons/TmLogin-step1.jpg"
import TmLoginStep2 from "../icons/TmLogin-step2.jpg"
import TmLoginStep3 from "../icons/TmLogin-step3.jpg"
import TmDAStep1 from "../icons/TmDA-step1.png"
import TmDAStep2 from "../icons/TmDA-step2.png"
import TmDAStep3 from "../icons/TmDA-step3.png"

export const products = [
    {
        color: "#FF0000",
        name: "ReddderDownloader",
        image: rdPreview,
        description: "ReddderDownloader supports downloading Reddit media. It can download the whole subreddit/user account with just few clicks. Downloads videos and pictures in HD quality (same as source)."
    },
    {
        color: "#1A8CD8",
        name: "TwiMedia",
        image: twPreview,
        description: "TwiMedia supports downloading Twitter media. It can download the whole user account with just a few clicks. Downloads videos and pictures in HD quality (same as source)."
    },
    {
        color: "#2600A1",
        name: "TumMedia",
        image: tmPreview,
        description: "TumMedia supports downloading Tumblr media. It can download the whole user account with just a few clicks. Downloads videos and pictures in HD quality (same as source)."
    }
]

export const HowToData = {
    ReddderDownloader: [
        {
            title: "How to Log In?",
            steps: [
                {
                    previewShot: "",
                    heading: "Step 1: Enter login details.",
                    body: "Enter your login details. Same as your RTTMedia login details."
                },
                {
                    previewShot: "",
                    heading: "Step 2: Click Sign in",
                    body: "Click the login button or just click the enter button."
                },
                {
                    previewShot: "",
                    heading: "Step 3: Wait",
                    body: "Wait to be directed to the main page."
                }
            ]
        },
        {
            title: "How to Download Account Media?",
            steps: [
                {
                    previewShot: "",
                    heading: "Step 1: Add a username/subreddit name.",
                    body: "Copy the user's username/subreddit name in the Reddit url."
                },
                {
                    previewShot: "",
                    heading: "Step 2: Account search",
                    body: "Paster the account name and search for it. Then select the account name on the dropdown list to start downloading."
                },
                {
                    previewShot: "",
                    heading: "Step 3: Wait. Account is downloading",
                    body: "When the download process begins, the account will show with all the media being downloaded."
                }
            ]
        }
    ],
    TwiMedia: [
        {
            title: "How to Log In?",
            steps: [
                {
                    previewShot: "",
                    heading: "Step 1: Enter login details.",
                    body: "Enter your login details. Same as your RTTMedia login details."
                },
                {
                    previewShot: "",
                    heading: "Step 2: Click Sign in",
                    body: "Click the login button or just click the enter button."
                },
                {
                    previewShot: "",
                    heading: "Step 3: Wait",
                    body: "Wait to be directed to the main page."
                }
            ]
        },
        {
            title: "How to Download Account Media?",
            steps: [
                {
                    previewShot: "",
                    heading: "Step 1: Add a username name.",
                    body: "Copy the user's username in the Twitter url."
                },
                {
                    previewShot: "",
                    heading: "Step 2: Account search",
                    body: "Paster the account name and search for it. Then select the account name on the dropdown list to start downloading."
                },
                {
                    previewShot: "",
                    heading: "Step 3: Wait. Account is downloading",
                    body: "When the download process begins, the account will show with all the media being downloaded."
                }
            ]
        }
    ],
    TumMedia: [
        {
            title: "How to Log In?",
            steps: [
                {
                    previewShot: TmLoginStep1,
                    heading: "Step 1: Enter login details.",
                    body: "Enter your login details. Same as your RTTMedia login details."
                },
                {
                    previewShot: TmLoginStep2,
                    heading: "Step 2: Click Sign in",
                    body: "Click the login button or just click the enter button."
                },
                {
                    previewShot: TmLoginStep3,
                    heading: "Step 3: Wait",
                    body: "Wait to be directed to the main page."
                }
            ]
        },
        {
            title: "How to Download Account Media?",
            steps: [
                {
                    previewShot: TmDAStep1,
                    heading: "Step 1: Add a blog name.",
                    body: "Copy the user's blog name in the Tumblr url."
                },
                {
                    previewShot: TmDAStep2,
                    heading: "Step 2: Account search",
                    body: "Paster the blog name and search for it. Then select the account name on the dropdown list to start downloading."
                },
                {
                    previewShot: TmDAStep3,
                    heading: "Step 3: Wait. Media is downloading",
                    body: "When the download process begins the account will show with all the media being downloaded."
                }
            ]
        }
    ]
}