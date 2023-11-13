import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../Requests'
// import {Text, View, StyleSheet} from 'react-native'

const timeArray = [
    "10:30",
    "12:30",
    "13:30",
    "14:30",
    "18:30",
    "19:30",
    "21:30",
];

const generateDate = () => {
    const date = new Date();
    let weekday = ['Sun', 'Mon', 'Tue', 'Wed','Thu','Fri','Sat'];
    let weekdays = [];
    for(let i=0;i<7;i++){
        let tempDate = {
            date: new Date(date.getTime() + i *24*60*60*1000).getDate(),
            day: weekday[new Date(date.getTime() + i *24*60*60*1000).getDay()],
        };
        weekdays.push(tempDate)
    }
    console.log(weekdays)
}

const generateSeats = () => {
    let numRow = 8;
    let numColumn = 3;
    let rowArray = []
    let start = 1;
    let reachnine = false;

    for(let i=0;i<numRow;i++) {
        let columnArray = [];
        for(let j=0;j<numColumn;j++) {
            let seatObject = {
                number : start,
                taken : Boolean(Math.round(Math.random())),
                selected: false, 
            }
            // SEAT OBJECT - number = key id
            columnArray.push(seatObject);
            start++;
            //PUSH THROUGH COLUMN ARRAY TO CHANGE SEAT NUMBER. START++
        }
        if(i==3){
            numColumn += 2
        }
        if(numColumn <9 && !reachnine) {
            numColumn +=2;
        } else {
            reachnine=true;
            numColumn -= 2;
        }
        //PUSH TO ROW ARRAY.
        rowArray.push(columnArray)
    }
    return rowArray;

}

const PurchaseTicket = ({navigation, item}) => {
    const [dateArray, setDateArray] = useState(['',generateDate()]);
    const [selectedDateIndex, setSelectedDateIndex] = useState([]);
    const [price, setPrice] = useState(0);

    const [twoDSeatArray, setTwoDSeatArray] = useState(generateSeats());
    const [selectedSeatArray, setSelectedSeatArray] = useState([]);
    const [selectedTimeIndex, setSelectedTimeIndex] = useState([]);

    const [movies, setMovies] = useState ([])

    const movie = movies[Math.floor(Math.random() * movies.length)]
    // Picks random movie each time from our axios api request


    useEffect(()=> {
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    }, [])
    
// console.log(JSON.stringify(twoDSeatArray,null,2));

  return (
    <div className='w-full h-full  overflow-auto scrollbar-hide'>
        <div className='w-full h-full flex flex-1 bg-black'>
        <img className='w-full aspect-auto'
    src={`https://image.tmdb.org/t/p/w500/${item?.BGImage}`} alt={item?.title}   
        />
        </div>
    </div>
  )
}



export default PurchaseTicket


{/* <linearGradient className='w-full aspect-auto bg-gradient-to-r from-cyan-500 to-blue-500 h-full'></linearGradient> */}