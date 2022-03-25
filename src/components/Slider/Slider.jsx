import Question from "../Question/Question";
import {quesitions} from '../../state/questions'
// Swiper React 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const Slider = () => {
    
    let lastId = quesitions.slice(-1)[0].id;

    const arrayQuesitions = quesitions.map((item)=>{ 
      return  <SwiperSlide key={item.id}><Question data={item} lastId={lastId}/></SwiperSlide>
    })

    return ( 
        <Swiper 
            navigation={{
            nextEl: '.next',
            }}
            allowTouchMove={false}
            modules={[Navigation]} 
            className="mySwiper">
            {arrayQuesitions}
        </Swiper> 
     );
}
 
export default Slider;