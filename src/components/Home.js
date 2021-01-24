import React,{useState,useEffect} from 'react'
import { merge2 } from './AllAlgos/merge'
import './style.css'
export default function Home() {
    const [nums, setnums] = useState([])
    const [refresh, setrefresh] = useState(true)
    useEffect(async () => {
        const k = await Promise.resolve(setNumbers())
        console.log('hey')
    },[])
    const setNumbers=()=>{
        // setnums([])
        const t=[]
        for(var i=0;i<230;i++){
            console.log(i,nums)
            const rand = Math.floor(1 + Math.random() * (500))
            t.push(rand)
        }
        setnums(t)
        setrefresh(!refresh)

    }
    useEffect(async () => {
        console.log('heyyyy')
    },[refresh])

    const mergeSort = ()=>{
        const moves = merge2(nums);
        console.log(moves.length,moves,"kkk")
        for(var i=0;i< moves.length  ;i++){
            const bar = document.getElementsByClassName('bars')
            const cc = i%3 !== 2;
            // console.log(bar)
            if(moves[i] !== undefined)
            {
                const a = moves[i][0]
                const b = moves[i][1]
            if(cc){
                if(bar[a] && bar[b]){
                const aStyle = bar[a].style
                const bStyle = bar[b].style
                const color = i%3 === 0 ? 'red':'cadetblue'
                setTimeout(()=>{
                    bar[a].style.backgroundColor = color
                    bar[b].style.backgroundColor = color
                },(i+1)*3)
            }
            }
            else{
                setTimeout(()=>{
                    // const aStyle = bar[a].style
                    if(bar[a])
                    bar[a].style.height = `${b}px`
                },(i+1)*3)
            }
        }
        }
    }

    

    console.log(nums)
    return (
        <div className='home'>
        <div className='left'>sidebar</div>
        <div className='right'>
            <div>
            {nums && (nums.map((e,i)=>(
                <div className='bars' key={i} style={{height: `${e}px`}}>
                   .
                </div>
            )))}
            </div>
            <div>
            <button onClick={()=>{setnums([]); setNumbers(); }}>Generate New Array</button>
            <button onClick={()=>{console.log('----'); mergeSort(); console.log("kk") }}>Merge Sort</button>
            </div>
        </div>
        </div>
    )
}
