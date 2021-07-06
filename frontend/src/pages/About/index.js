import Bar from '../../components/Bar-subpages/Bar';
import Footer from './layout/Footer';
import './index.css';
import Description from '../../components/Description';
import React from 'react';
import {AnimatePresence, motion} from "framer-motion";

export default function About(props) {
  const SlideIndex = React.useRef(1);
  // const [SlideIndex, SetSlideIndex] = React.useState(1);
  const images = {1:"/images/me.jpg",2:"/images/project.jpeg",3:"/images/tennis.jpg"}
  const sub = {1:"Cooking",2:"Projects",3:"Tennis no picture yet"}

  React.useEffect(()=>{
    showSlide()
  },[])
  function currentSlide(n) {
    SlideIndex.current = n
    showSlide()
  }
  function showSlide(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[SlideIndex.current-1].style.display = "block";
    dots[SlideIndex.current-1].className += " active";

  }
  return (
    <motion.div initial="out" animate="in" exit="out" variants={props.pageTransitions} transition = {{type:'tween', ease:"linear"}}>
      <Bar title="About" name="Owen"></Bar>
      <div id="Footer-container">
        <Description>
          {`I am Owen and I am passionate about programming. The first time I tried coding was in first year without any prior knowledge in programming. And, I loved it.

The reason why I love to code is because I can create something that is useful from just the imagination. This website was created using React, JavaScript, CSS.
`}
        </Description>

        <h2>Hobbies: Cooking, Projects and  Tennis</h2>
        <div className="slideshow-container">
        {/* <img src="/images/me.jpg"/> */}
            {[1,2,3].map(res =>{
              return(
                <div className="mySlides fade">
              <div className="numbertext">{res} / 3</div>
              <img src={images[res]}/>
              <div className="text">{sub[res]} </div>
            </div>

              )
            })}
            

            {/* <a className="prev" onClick={() =>plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() =>plusSlides(1)}>&#10095;</a> */}
          </div>
          <br/>

          <div style={{textAlign:'center', marginBottom: 10}}>
            <span className="dot" onClick={() =>currentSlide(1)}></span>
            <span className="dot" onClick={() =>currentSlide(2)}></span>
            <span className="dot" onClick={() =>currentSlide(3)}></span>
          </div>
      </div>
      <Footer>Made with Love By Owen</Footer>
    </motion.div>
  );
}
