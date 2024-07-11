import React from 'react';
import Card from './Card';
import { useState } from 'react';

function Cards(props) {
  let category = props.category;
  if(category === "Lifestyle"){
    console.log("There is no error");
  }
  let courses = props.courses;
  const [likedcourses, setLikedcourses] = useState([]);
  function getCourses() {
    if(category === "All"){
      let allCourses = [];
      Object.values(courses).forEach((category) => {
        category.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    }else{
      return courses[category];
    }
  };

  const allCourses = getCourses();
  return (
    <div className='flex flex-wrap justify-center'>
      {
      allCourses.map((course) => (
        <Card key={course.id} course={course} likedcourses = {likedcourses} setLikedcourses = {setLikedcourses}/>
))}
    </div>
  );
};

export default Cards;
