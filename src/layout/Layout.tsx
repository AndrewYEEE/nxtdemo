import React, {useState} from "react";
import Link from "next/link";

interface LayoutProps {
    startIcon?: React.ReactNode;
    disabled?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }
  

const Layout = ({children}:LayoutProps)=>{
    const [keyword, setkeyword] = useState("");
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/products">Product</Link>
            <input value={keyword} onChange={(e)=>setkeyword(e.target.value)}></input>
            {children}
        </div>
    )
}



export default Layout;