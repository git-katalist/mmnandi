import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import * as Beef from '../components/beef/Beef'


export default function Home() {
  return (
    <>
			<Beef.Beef  />
			<Beef.excerpt />
      <h1>Hello today, access this amazing framework</h1>
    </>
  );
}
