import { Link , NavLink} from 'react-router-dom'
import React,  {useEffect , useState} from 'react';
// import {useLoaderData} from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';



function About() {
  const data =useLoaderData();
  console.log(data);
//   const [data, setData] = useState("")
// useEffect(
//   () =>{
//      fetch("https://api.github.com/users/hiteshchoudhary")
//      .then(res => res.json())
//      .then(res => setData(res))
//   } ,[]


    return(
        <>
        <section className="about" id="about">
        <div className="max-width">
            <h1 className="about-head title">About me</h1>
            <div className="about-content">
              <div className="left column">
                <img src={data.avatar_url} alt=""/>
              </div>
              <div className="right column">
              <div className="text">I'm Awais and my followers are <span>{data.followers}</span></div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dolorum assumenda nam ipsum repudiandae facere officiis distinctio, saepe illo cumque soluta impedit quaerat excepturi accusantium ratione. Doloremque vel perferendis iusto non eum similique amet quas provident tempora magni et dolores nemo eos inventore minus cum itaque ratione veritatis quam corrupti pariatur saepe illo, accusantium natus. Saepe sapiente inventore voluptas nobis cum harum voluptate, quaerat consectetur delectus eum, hic illum tempore!</p>
              <div className="CV">
                <Link to="#">Download CV</Link>
              </div>
              </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default About;

export const githubCall = async () =>{
 const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  const data = await res.json();
  console.log(data);
  return data;
  }

