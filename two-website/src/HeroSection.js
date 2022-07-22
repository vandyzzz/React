import React from "react";

const HeroSection = () => {
    return (
        <div className="jumbotron ">
        <h1 className="display-4">App looks great!</h1>
        <p className="lead">
        Counter-Strike (CS) is a series of multiplayer first-person shooter video games in which teams of 
        terrorists battle to perpetrate an act of terror (bombing, hostage-taking, assassination) while counter-terrorists try to
         prevent it (bomb defusal, hostage rescue). The series began on Windows in 1999 with the release of the first game, Counter-Strike.
          It was initially released as a modification ("mod") for 
          Half-Life that was designed by Minh "Gooseman" Le and Jess "Cliffe" Cliffe before the rights to the
           mod's intellectual property were acquired by Valve, the developers of Half-Life, who then turned Counter-Strike into a retail product.
           The original Counter-Strike was followed by Counter-Strike: Condition Zero,CS:GO.
        </p>
        <hr className="my-4" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          incidunt?
        </p>
        <a className="btn btn-success btn-lg" href="#" role="button"
          >React is awesome</a
        >
      </div>
    )
}
export default HeroSection;