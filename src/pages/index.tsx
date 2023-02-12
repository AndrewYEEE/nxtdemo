import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, {useEffect, useState} from 'react' //按control可以找報*.d.ts宣告檔
import { GetServerSideProps } from 'next'
import { GetStaticProps } from 'next'
import styled from "styled-components";
const inter = Inter({ subsets: ['latin'] })


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



const Container = styled.div`
  text-align: center;
`

const Home=()=>{
  return (
    <Container>Home</Container>
  )
}

export default Home;
