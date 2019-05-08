import React from 'react';
import Typography from "@material-ui/core/es/Typography/Typography";

function About() {
    return (
        <div>
            <Typography variant="p">
            I love old guitars, hiking in the woods while it lightly rains, anything DIY — especially if it involves soldering — and tinkering in general.
            I've been taking things apart since I can remember. I love looking at all the individual components of a guitar amp, or microphone, or old radio and seeing how they all work together.
            I guess that's why developing makes so much sense to me — a web app is just a bunch of different components that fit together in a succinct way, producing
            an something for others to enjoy.
        </Typography>

        <Typography variant="p">
            I love the process, the tinkering, the problem solving, the creating and designing.
            My clients love the end product — a beautifully designed solution, elegant in both aesthetics and function.
            We both enjoy the time spent collaborating and working together.
            So hit me up if you have a project in mind, or if you wanna talk about WWII era Gibson acoustic guitars, or debate Pro Tools versus Ableton Live.
            I've got many passions, hopefully you do too.
         </Typography>
        </div>
    );
}

export default (About);