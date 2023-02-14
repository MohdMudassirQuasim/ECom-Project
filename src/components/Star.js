import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Star = ({ stars, reviews }) => {
  // const ratingStar = Array.from({ length: 5 }, (elem, index) => {
  //   let number = index + 0.5;
  //   return (
  //     <span key={index}>
  //       {stars >= index + 1 ? (
  //         <FaStar className="icon" />
  //       ) : stars >= number ? (
  //         <FaStarHalfAlt className="icon" />
  //       ) : (
  //         <AiOutlineStar className="icon" />
  //       )}
  //     </span>
  //   );
  // });


const fun = () => {
  let starrating = [];
  for (let i=0 ; i<5 ; i++){
    if (stars >= i + 1 ){
      starrating.push(<FaStar className="icon"/>)
    }else if( stars >= i+0.5 ){
      starrating.push(<FaStarHalfAlt className="icon"/>)      
    }else starrating.push(<AiOutlineStar className="icon"/>)
  }
  return starrating;
}

  return (
    <Wrapper>
      <div className="icon-style">
        {/* {ratingStar} */}
        {fun()}
        <p>({reviews} customer reviews)</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;

export default Star;