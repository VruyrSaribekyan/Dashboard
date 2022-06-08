import React from "react";
import styles from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import {FaBell} from 'react-icons/fa'
export default function Header(props) {
  return (
    <div style={{display:'block'}}>
      <div className={styles.header}>
        <div className={styles.inputContainer}>
         <FaSearch style={{position:'absolute', top:11, left:'25%'}}/> <input placeholder="search"/>
        </div>
        <div className={styles.userContainer}>
            <FaBell style={{color:'gray'}}/><div className={styles.vl}></div>
            <p>Vruyr Saribekyan</p>
            <img className={styles.userIcon} src='usericon.png'/>
        </div>

      </div>
    </div>
  );
}
