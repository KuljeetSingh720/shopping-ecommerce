import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          repellat iste ex asperiores corporis exercitationem sapiente vitae
          quasi distinctio ipsam iusto officia, soluta nisi consectetur cumque
          eum, debitis suscipit! Eum expedita natus quasi rem vero eos minus?
          Cupiditate cum perferendis, id repellat quam quod eius doloremque
          aliquid! Ut, repellat repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel
          ad, necessitatibus officia sunt cupiditate distinctio deserunt animi
          magnam explicabo, vitae inventore quasi? Aliquam, voluptatum! Expedita
          repellendus qui voluptatibus velit earum tenetur! Natus odit accusamus
          consequuntur dolores amet deserunt necessitatibus?
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
