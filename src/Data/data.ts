import rdPreview from "../icons/ReddderDownloader-preview.png"
import rdLogo from "../icons/ReddderDownloader.png"
import twPreview from "../icons/TwiMedia-preview.png"
import twLogo from "../icons/TwiMedia.png"
import tmPreview from "../icons/TumMedia-preview.png"
import tumLogo from "../icons/TumMedia.png"

import TmLoginStep1 from "../icons/TmLogin-step1.jpg"
import TmLoginStep2 from "../icons/TmLogin-step2.jpg"
import TmLoginStep3 from "../icons/TmLogin-step3.jpg"
import TmDAStep1 from "../icons/TmDA-step1.png"
import TmDAStep2 from "../icons/TmDA-step2.png"
import TmDAStep3 from "../icons/TmDA-step3.png"

import featPlayer from "../icons/feat-player.svg"
import featSearch from "../icons/feat-search.svg"
import featRefresh from "../icons/feat-refresh.svg"
import featAccountDownload from "../icons/feat-account-download.svg"
import featFullView from "../icons/feat-full-view.svg"
import featFastDownload from "../icons/fast-support.svg"

export const products = {
    "ReddderDownloader": {
        color: "#FF0000",
        name: "ReddderDownloader",
        logo: rdLogo,
        image: rdPreview,
        description: "ReddderDownloader supports downloading Reddit media. It can download the whole subreddit/user account with just a few clicks. Downloads videos and pictures in HD quality (same as source)."
    },
    "TwiMedia": {
        color: "#1A8CD8",
        name: "TwiMedia",
        logo: twLogo,
        image: twPreview,
        description: "TwiMedia supports downloading Twitter media. It can download the whole user account with just a few clicks. Downloads videos and pictures in HD quality (same as source)."
    },
    "TumMedia": {
        color: "#2600A1",
        name: "TumMedia",
        logo: tumLogo,
        image: tmPreview,
        description: "TumMedia supports downloading Tumblr media. It can download the whole user account with just a few clicks. Downloads videos and pictures in HD quality (same as source)."
    }
}

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
                    body: "Copy the user's username/subreddit name in the Reddit URL."
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

export const MoreAmazingFeauterData = [
    {
        image: featPlayer,
        head: "Media Viewer",
        body: "An in-app media player to view and play account images and videos."
    },
    {
        image: featSearch,
        head: "Account Search",
        body: "Search feature will allow you to easily search for any account you want. A list of all available accounts will be displayed in the dropdown list."
    },
    {
        image: featAccountDownload,
        head: "Account Batch Download",
        body: "Download all images and videos available within an account. Stay in tune with your favorite accounts."
    },
    {
        image: featRefresh,
        head: "Account Refresh",
        body: "Stay in the loop with all the media in your favorite accounts by downloading any new media available."
    },
    {
        image: featFullView,
        head: "Account Full View",
        body: "See all the images and videos of an account right within the app as if they were viewed directly from the web."
    },
    {
        image: featFastDownload,
        head: "Fast Download",
        body: "Download images and videos at a speed of 8x faster compared to normal download speed. Using up to 8 multi-download connections."
    }
]

export const PrivacyPolicyData = [
    {
        head: "PERSONAL INFORMATION",
        text: "We may collect personal information from Users in a variety of ways in connection with activities, services, features or resources we make available on our Site. For example, we collect different information when you register, or when you make a purchase on one of our products."
    },
    {
        head: "WEB PROWSER COOKIES",
        text: "Our Site uses cookies to enhance User experience. We store the following in order to boost your experience, When you signed in we store a cookie for a limited time in order recorgnise you."
    },
    {
        head: "HOW DO WE PROTECT YOUR INFORMATION",
        text: "We adopt appropriate data collection, storage and processing practices and security measures to prevent unauthorized access, alteration, disclosure or destruction of your personal information, usernames, passwords, data changes and data stored on our website."
    },
    {
        head: "INFORMATION SHARING",
        text: "We do not share, sell, trade, or expose your information to others."
    },
    {
        head: "HOW DO WE KEEP YOUR INFORMATION",
        text: "We keep information as long as we need it."
    },
    {
        head: "YOU ACCEPT THESE TERMS",
        text: "Your use of this website means that you accept this policy. If you do not accept this policy, please do not use our website. Your continued use of this website following the posting of changes to this policy will mean that you accept those changes."
    },
    {
        head: "HOW WILL YOU KNOW THE PRIVACY POLICY HAS CHANGED",
        text: "If there are any changes to this policy we will notify you in advance. You will have the opportunity to review the revised policy before choosing to continue using our products."
    }
]