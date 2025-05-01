import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <>
      <div className="Description">
        <div className="Description-navigator">
          <div className="Description-nav-box">Description</div>
          <div className="Description-nav-box fade">Reviews(122)</div>
        </div>
        <div className="Description-content-text">
          <p>
            Clothes are garments worn to cover the body, providing protection,
            comfort, and style. They come in various materials, designs, and
            functions, ranging from casual everyday wear to formal attire.
            Whether it's breathable cotton for a summer day or a tailored suit
            for professional settings, clothing reflects personal taste,
            cultural influences, and practical needs
          </p>
          <p>
            Clothing serves as an essential part of human life, blending
            practicality with personal expression. From lightweight fabrics that
            offer breathability in warm climates to insulated materials that
            provide warmth in colder weather, the choice of clothing reflects
            both functional and aesthetic considerations. Fashion trends
            continuously evolve, influenced by cultural shifts, technological
            advancements, and personal preferences. Whether it's the timeless
            elegance of formal attire or the comfort of casual wear, clothing
            plays a crucial role in defining individual style and identity.
            Beyond fashion, garments also carry historical and societal
            significance, symbolizing status, traditions, and even social
            movements. Ultimately, clothing is more than just fabric—it is a
            representation of personality, creativity, and the dynamic
            relationship between form and function.
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;
