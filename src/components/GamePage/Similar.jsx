import React from "react";
import SimilarGameCard from "./SimilarGameCard";

export default function Similar({similar}) {
    return (
            <div className="max-w-screen-xl mx-auto rounded-md bg-medium-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear min-h-fit mt-7 mb-24">
                <h3 className="py-8 text-center text-white font-poppins mr-1 mobile:text-4xl text-2xl">Similar Games</h3>
                <div className="grid md:grid-col-4 grid-col-2 md:grid-rows-none grid-rows-2 grid-flow-col gap-4 pb-7 mb-8">
                    {similar ? similar.map((game) => <SimilarGameCard key={game.id} cover={game.cover} id={game.id} />) : null} 
                </div>
            </div>
    );
}
