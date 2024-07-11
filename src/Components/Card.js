import React from "react";
import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { toast } from "react-toastify";
function Card(props) {
    let course = props.course;
    let likedcourses = props.likedcourses;
    let setLikedcourses = props.setLikedcourses;

    function clickHandler(){
        if(likedcourses.includes(course.id)){
            setLikedcourses((prev) => prev.filter((cid)=> (cid !== course.id)));
            toast.warning("Like removed");
         }
         else{
            if(likedcourses.length === 0){
                setLikedcourses([course.id]);
            }else{
                setLikedcourses((prev) => [...prev], course.id);
            }
            toast.success("Liked successfully");
         }
    }
    return(
        <div className="w-[300px] bg-slate-900 bg-opacity-80 rounded-md overflow-hidden my-4 mx-3 p-3 shadow-md shadow-white">
            <div className="relative ">
                <img src={course.image.url} alt = {course.image.alt}></img>
                <div className="w-[35px] h-[35px] bg-white rounded-full absolute right-1 bottom-1 grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                            !likedcourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>
            <div>
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {
                        course.description.length > 100 ? (course.description.substr(0, 100) + "..." ): (course.description)
                    }
                </p>
            </div>
        </div>
    )
}
export default Card;
