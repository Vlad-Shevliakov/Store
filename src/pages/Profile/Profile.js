import React, {useState, useEffect} from "react"
import classes from "./Profile.scss"
import axios from "axios"

const Profile = props => {
    const [ip, setIp] = useState("")
    const [city, setCity] = useState("")

    useEffect(() => {
        axios.get("https://api.2ip.ua/geo.json?ip=").then(resp => {
            const {ip, city_rus} = resp.data
            setIp(ip)
            setCity(city_rus)
        })
        return () => {
            console.log("unm")
        }
    }, [])

    return (
        <section className={classes.Profile}>
            <h2>Здравствуйте: {ip}</h2>
            <h2>{city}</h2>
        </section>
    )
}

export default Profile
