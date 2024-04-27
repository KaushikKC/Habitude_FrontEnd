import { ethers } from 'ethers';
import {Contract_Address,Contract_Abi} from '../context/config'

// Initialize Ethereum provider (e.g., MetaMask)
export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const contract = new ethers.Contract(Contract_Address, Contract_Abi, provider);