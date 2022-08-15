import React, { useState } from 'react'
import axios from "axios";

function DataCheck() {
    const [catgery, catName] = useState("");
    const [language, setlanguage] = useState("");
    const [sort, setsort] = useState("");

    function saveData() {
        let data = { catgery, language, sort }
            // console.warn(data);
        axios("https://hoblist.com/api/movieList", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)

        }).then((resp) => {
            console.warn("resp", resp);;
            console.log(resp);

        })
    }
    return ( <
        div className = "Welcome" >
        <
        h1 > MOVIE DETAILED < /h1>   <
        input type = "text"
        name = "catgery"
        value = { catgery }
        onChange = {
            (e) => { catName(e.target.value) } }
        /> <br / > < br / >
        <
        input type = "text"
        name = "language"
        value = { language }
        onChange = {
            (e) => { setlanguage(e.target.value) } }
        /> <br / > < br / >
        <
        input type = "text"
        name = "sort"
        value = { sort }
        onChange = {
            (e) => { setsort(e.target.value) } }
        /> <br / > < br / >
        <
        button type = "button"
        onClick = { saveData } > Movie Data < /button> <
        /div>
    );
}
export default DataCheck;