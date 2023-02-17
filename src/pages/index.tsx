import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import React, {useEffect, useState} from 'react' //按control可以找報*.d.ts宣告檔
import { GetServerSideProps, NextPage } from 'next'
import { GetStaticProps, GetStaticPaths  } from 'next'
import styled from "styled-components";
import { useRouter } from 'next/router'
import Layout from '@/layout/Layout'


//================CSR=====================//
// interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// export default function Home() {
//   const [post, setPost] = useState<Post>(); 
  
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => res.json())
//     .then((res) => setPost(res));
//   },[]);
  
//   return (
//     <>
//       <h1>{post?.title}</h1>
//       <p>{post?.body}</p>
//     </>
//   )
// }

//================SSR===================//
// interface HomeProps{
//   post: Post;
// }

// export default function Home({post}: HomeProps) {
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   )
// }


//這個SSR非同步函式會先被執行，並且結果被丟入Component中 (上面的Home)
// export const getServerSideProps: GetServerSideProps = async ()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const post: Post = await res.json();
//   return {
//     props: {
//       post,
//     },
//   }
// }


// //================SSG===================//
// export const getStaticProps:GetStaticProps = async ()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const post: Post = await res.json();
//   return {
//     props: {
//       post,
//     },
//   }
// }



// const Container = styled.div`
//   text-align: center;
// `

// const Home=()=>{
//   return (
//     <Container>Home</Container>
//   )
// }


//=====================練習prefetch功能======================//
// import type { NextPage } from "next";
// import Link from "next/link";

// const Home: NextPage = () => {
//   return (
//     <Link href="/products">
//       <a>link to products</a>
//     </Link>
//   )
// }

//=====================練習prefetch功能2======================//
// const Home: NextPage = () =>{
//   const router = useRouter();
//   useEffect(()=>{
//     router.prefetch("/products");
//   },[]);

//   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>{
//     e.preventDefault();
//     router.push("/products");
//   }
//   return (
//     <div>
//       <button onClick={(e)=>{handleClick(e)}}>to /products</button>
//     </div>
//   )
// }

//====================一般練習======================//
const Home = ()=>{
  return (
    <Layout>
      <div>You are in /</div>
    </Layout>
  )
}


export default Home;
