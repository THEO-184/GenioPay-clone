import React from 'react'
import { RiDashboardFill } from 'react-icons/ri'
import { BiWalletAlt } from 'react-icons/bi'
import { AiOutlineCreditCard } from 'react-icons/ai'
import { BsCurrencyDollar, BsPeople } from 'react-icons/bs'

const contentObj = [
    {
        id: 1,
        path: <RiDashboardFill />,
        word: 'Dashboard',
    },
    {
        id: 2,
        path: <BiWalletAlt />,
        word: 'Wallet',
    },
    {
        id: 3,
        path: <AiOutlineCreditCard />,
        word: 'Cards',
    },
    {
        id: 4,
        path: <BsCurrencyDollar />,
        word: 'FX Center',
    },
    {
        id: 5,
        path: <BsPeople />,
        word: 'Beneficiaries',
    },
]

const walletInfo = [
    {
        id: 1,
        account_name: 'Personal account',
        currency: 'USD',
        price: '$10,250.00',
        path: 'https://e7.pngegg.com/pngimages/666/76/png-clipart-flag-of-the-united-states-national-flag-usa-flag-flag-logo.png',
        backCol: '#FFF6E6',
    },
    {
        id: 2,
        account_name: 'EUR account',
        currency: 'EUR',
        price: '$4000.00',
        path: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png',
        backCol: '#FBF1F0',
    },
    {
        id: 3,
        account_name: 'School fees',
        currency: 'GBP',
        price: '$50.000',
        backCol: '#DDECEF',
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_United_Kingdom.png/1200px-Flag_of_the_United_Kingdom.png',
    },
]

const quickWalletLinks = [
    {
        id: 1,
        word: 'Add new wallet',
        path: '/images/wallet.png',
        backColor: '#F97316',
    },
    {
        id: 2,
        word: 'Add new Card',
        path: '/images/newCard.png',
        backColor: '#005061',
    },
    {
        id: 3,
        word: 'Balance Exchange',
        path: '/images/dollarCurrency.png',
        backColor: '#F59E0B',
    },
    {
        id: 4,
        word: 'Transfer to Account',
        path: '/images/newCard.png',
        backColor: '#5EEAD4',
    },
    {
        id: 5,
        word: 'Generate Voucher',
        path: '/images/GenerateWallet.png',
        backColor: '#9333EA',
    },
    {
        id: 6,
        word: 'mobile money',
        path: '/images/mobileWallet.png',
        backColor: '#FFCB00',
    },
    {
        id: 7,
        word: 'Payment Link',
        path: '/images/paymentWallet.png',
        backColor: '#F43F5E',
    },
]

const transactionHistory = [
    {
        id: 1,
        path: '/images/transactionsWallet.png',
        word: 'Total Transactions',
        price: '$88,600.00',
    },
    {
        id: 2,
        path: '/images/payin.png',
        word: 'Pay-In',
        price: '$4600.00',
    },
    {
        id: 3,
        path: '/images/pay-out.png',
        word: 'Pay-Out',
        price: '$72,600.00',
    },
]

const tabContents = [
    {
        id: 1,
        word: 'Active (3)',
    },
    {
        id: 2,
        word: 'Inactive (2)',
    },
    {
        id: 3,
        word: 'Closed (0)',
    },
]
const WalletTabContents = [
    {
        id: 1,
        word: 'Active',
    },
    {
        id: 2,
        word: 'Transactions',
    },
    {
        id: 3,
        word: 'Invoices',
    },
]

const expensesDetails = [
    {
        id: 1,
        word: 'Ledger Balance',
        total: 2000000.5,
    },
    {
        id: 2,
        word: 'Total Income',
        total: 2000000.5,
    },
    {
        id: 3,
        word: 'Blocked Balance',
        total: 0.0,
    },
    {
        id: 4,
        word: 'Total Outgoing',
        total: 5000000.5,
    },
]

const payMentOptions = [
    {
        id: 1,
        word: 'Payment',
        path: '/images/payment.png',
    },
    {
        id: 2,
        word: 'Pay In',
        path: '/images/payin.png',
    },
]

const getNavContent = () => {
    return contentObj
}

export const getWalletDetails = () => {
    return walletInfo
}

export const getQuickWallets = () => {
    return quickWalletLinks
}

export const getTransactionHistory = () => {
    return transactionHistory
}

export const getTabContents = () => {
    return tabContents
}
export const getWalletTabContents = () => {
    return WalletTabContents
}

export const getExpensesDetails = () => {
    return expensesDetails
}

export const getPaymentOptions = () => {
    return payMentOptions
}

export default getNavContent
