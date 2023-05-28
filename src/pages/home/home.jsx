import React from "react";
import Feed from "../../component/feed/feed";
import Rightbar from "../../component/rightbar/rightbar";
import Sidebar from "../../component/sidebar/sidebar";
import TopBar from "../../component/topbar/topbar";
import "./home.css"


export default function Home() {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}